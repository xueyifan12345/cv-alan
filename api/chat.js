export const config = {
  runtime: 'edge',
}

const MODEL_NAME = "llama-3.3-70b-versatile"
const API_URL = "https://api.groq.com/openai/v1/chat/completions"

const SYSTEM_PROMPT_EN = `You are Yifan Xue, a professional Full-Stack Software Engineer. Speak in the first person.
Tone: Technical, direct, and concise. No corporate filler.
Background: 4+ years of experience. Lead Front-end Architect at Sagent Lending Technologies, formerly at Walmart (Item360).
Education: M.S. Business Analytics (Tulane), B.S. Statistics (MSU).
Expertise: React, TypeScript, Node.js, GraphQL, GCP, LLMOps.
Location: East Lansing, MI.
Mandate: Answer questions about your professional experience. Be brief (max 150 words). If unsure, redirect to yifanxue.sde@gmail.com.`

const SYSTEM_PROMPT_ZH = `你是薛一凡 (Yifan Xue)，一名专业的全栈软件工程师。始终使用第一人称。
语气：专业、技术化、直接、简洁。避免冗长的客套话。
背景：4年以上经验。曾任 Sagent Lending Technologies 前端架构负责人，Walmart (Item360) 前端工程师。
教育：杜兰大学 (Tulane) 商业分析硕士，密歇根州立大学 (MSU) 统计学学士。
专长：React, TypeScript, Node.js, GraphQL, GCP, LLMOps。
所在地：密歇根州东兰辛 (East Lansing, MI)。
任务：回答关于你的专业经验和项目的问题。回答要简洁（最多150字）。如果不知道，请建议联系：yifanxue.sde@gmail.com。`

export default async function handler(req) {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  const API_KEY = process.env.GROQ_API_KEY

  if (!API_KEY) {
    console.error('[Groq] GROQ_API_KEY is missing in environment variables')
    return new Response(`data: ${JSON.stringify({ text: 'Error: API key not configured. Please add GROQ_API_KEY to your environment.' })}\n\ndata: [DONE]\n\n`, {
      headers: { 'Content-Type': 'text/event-stream' }
    })
  }

  try {
    const { messages, lang = 'en' } = await req.json()
    
    // 1. Process message list: merge consecutive roles, remove errors
    const processedMessages = []
    let lastRole = null

    for (const m of messages) {
      if (!m.content || m.content.includes('Error sending') || m.content.includes('Handler Error')) continue
      
      if (m.role === lastRole && processedMessages.length > 0) {
        processedMessages[processedMessages.length - 1].content += "\n" + m.content
      } else {
        processedMessages.push({ role: m.role, content: m.content })
        lastRole = m.role
      }
    }

    // 2. Select system prompt based on language
    const systemPrompt = lang === 'zh' ? SYSTEM_PROMPT_ZH : SYSTEM_PROMPT_EN

    const finalMessages = [
      { role: 'system', content: systemPrompt },
      ...processedMessages.slice(-8) // Keep last 8 messages for context
    ]

    console.log(`[Groq] Requesting ${MODEL_NAME} (Lang: ${lang})...`)

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: finalMessages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1024
      })
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('[Groq] API Error:', err)
      return new Response(`data: ${JSON.stringify({ text: `API Error: ${response.status} ${response.statusText}` })}\n\ndata: [DONE]\n\n`, {
        headers: { 'Content-Type': 'text/event-stream' }
      })
    }

    const { readable, writable } = new TransformStream()
    const writer = writable.getWriter()
    const reader = response.body.getReader()
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    ;(async () => {
      let buffer = ''
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed || trimmed === 'data: [DONE]') continue
            
            if (trimmed.startsWith('data: ')) {
              try {
                const jsonStr = trimmed.slice(6)
                if (jsonStr === '[DONE]') continue
                
                const data = JSON.parse(jsonStr)
                const content = data.choices?.[0]?.delta?.content
                if (content) {
                  await writer.write(encoder.encode(`data: ${JSON.stringify({ text: content })}\n\n`))
                }
              } catch (e) {
                console.error('[Groq] Error parsing stream line:', trimmed, e)
              }
            }
          }
        }
      } catch (err) {
        console.error('[Groq] Stream error:', err)
      } finally {
        await writer.write(encoder.encode('data: [DONE]\n\n'))
        writer.close()
      }
    })()

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('[Groq] Handler error:', error)
    return new Response(`data: ${JSON.stringify({ text: 'Internal Server Error' })}\n\ndata: [DONE]\n\n`, {
      headers: { 'Content-Type': 'text/event-stream' }
    })
  }
}
