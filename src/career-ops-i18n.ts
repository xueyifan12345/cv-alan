export type CareerOpsLang = 'zh' | 'en'

export const careerOpsContent = {
  zh: {
    slug: 'career-ops',
    altSlug: 'career-ops-system',
    readingTime: '18 分钟阅读',
    seo: {
      title: 'Career-Ops：自动化我求职过程的 AI 智能体',
      description: '案例研究：一个能从 10 个维度评估职位、根据职位生成个性化简历并自动化申请流程的多智能体系统。已有 631 次评估。',
    },
    nav: {
      breadcrumbHome: '首页',
      breadcrumbCurrent: 'Career-Ops',
    },
    header: {
      kicker: '案例研究：从个人项目到 35.6K+ Stars',
      h1: 'Career-Ops：AI 智能体如何自动化我的求职之路',
      subtitle: '我构建了一个多智能体系统来自动化我的求职过程。它成功了：我现在是应用 AI 负责人。随后我将其开源，并迅速走红 — 在 GitHub 上获得了 35.6K+ Stars。',
      badge: '任务完成',
      date: '2026年3月17日',
    },
    heroMetrics: [
      { value: '631', label: '评估次数' },
      { value: '302', label: '处理申请' },
      { value: '12', label: '模式' },
      { value: '10', label: '维度' },
      { value: '680', label: '去重 URL' },
    ],
    tldr: '一个使用 Claude Code 构建的多智能体系统，可自动化求职流程：从 10 个维度 (A-F) 为职位打分，生成针对性优化的个性化 PDF 简历，通过 Playwright 填写表单，并使用并行 Worker 进行批量处理。人机协作设计：AI 分析，我做决定。基于 MIT 协议开源 — 35.6K+ Stars，Discord 成员 1,300+。',
    manifesto: '公司使用 AI 来筛选候选人。我只是让候选人也能用 AI 来选择公司。',
    metaCallout: '讽刺的是：我构建了一个多智能体系统来寻找多智能体相关的职位。这个系统比任何面试都更能证明我的能力。而且，这并不是作弊：Career-Ops 自动化的是分析，而非决策。',
    closingCallback: '这个系统证明了面试无法证明的一点：在 AI 时代，你用 AI 构建的东西才是雇主最看重的简历。',
    internalLinks: {
      chatbot: {
        text: '自愈聊天机器人 | 案例研究',
        href: '/zi-yu-liao-tian-ji-qi-ren',
      },
      jacobo: {
        text: 'AI 智能体 Jacobo | 案例研究',
        href: '/agente-ia-jacobo',
      },
      businessOs: {
        text: 'Business OS | 案例研究',
        href: '/business-os-para-airtable',
      },
      pseo: {
        text: '程序化 SEO | 案例研究',
        href: '/seo-programatico',
      },
    },
    sections: {
      intro: {
        hook: '我构建了一个 AI 系统来找工作。它奏效了 — 我现在是应用 AI 负责人。然后我把它发布在 GitHub 上，反响热烈：35.6K+ Stars，广泛传播，并在法国、中国和韩国都有报道。求职的第一周我全是手动操作。第二周我就不再主动投递了 — 我在构建 Career-Ops。',
        body: '经过 631 次评估，Career-Ops 的筛选效果比我还好。这是一个作为多智能体系统构建的 AI 求职工具：阅读职位描述，从 10 个维度为其打分，生成个性化简历并准备申请。我负责审核和决定，AI 负责分析工作。该系统完美展示了目标职位所需的能力 — 这一点也引起了雇主的注意。',
      },
      theProblem: {
        heading: '为什么我需要自动化求职？',
        body: '寻找高级 AI 工程师职位本身就是一份全职工作。每个职位都需要阅读 JD、将你的技能与要求对应、修改简历、撰写个性化回复并填写包含 15 个字段的表单。如果每天要投 10 个职位，工作量可想而知。',
        painPoints: [
          { label: '重复阅读。', detail: '70% 的职位并不合适。你往往在读完 800 字的 JD 后才发现这一点。' },
          { label: '简历过于通用。', detail: '静态 PDF 无法针对每个具体职位突出最相关的核心竞争力。' },
          { label: '手动填写表单。', detail: '每个平台都以不同的格式询问相同的问题。每次申请都要复制粘贴 15 次。' },
          { label: '缺乏追踪。', detail: '没有系统，你就会忘记在哪里投过。重复投递或彻底失去跟进。' },
          { label: '零反馈。', detail: '投递、等待，却永远不知道问题出在适配度、简历还是时机。' },
          { label: '全球化市场。', detail: 'AI 行业正在全球范围内流动。当你向 6 个不同国家的公司投递时，本地的内推就无法扩展。' },
        ],
        punchline: '这并不难，只是非常重复。而重复的工作就应该被自动化。',
      },
      architecture: {
        heading: '多智能体系统是如何工作的？',
        body: 'Career-Ops 不是一个脚本或自动投递机器人。它是一个拥有 12 种运行模式的多智能体系统，每种模式都是一个 Claude Code 技能文件，拥有自己的上下文、规则和工具。一个能够对问题域进行推理并执行正确操作的 AI 智能体。',
        whyModes: {
          heading: '为什么选择模式化而非单一提示词',
          items: [
            { label: '精准的上下文。', detail: '每种模式仅加载其需要的信息。auto-pipeline 不会加载联系规则。apply 不会加载评分逻辑。' },
            { label: '可测试性。', detail: '每种模式都可以单独测试。修改 PDF 逻辑绝不会影响到评估环节。' },
            { label: '独立演进。', detail: '添加新模式不会破坏现有功能。Training 模式是在首次部署 3 周后添加的。' },
          ],
        },
        modes: [
          { name: 'auto-pipeline', desc: '完整管道：提取 JD、评估 A-F、生成报告、PDF 和追踪记录。' },
          { name: 'oferta', desc: '单职位评估，包含 6 个模块：总结、简历匹配、职级、薪资、个性化、面试。' },
          { name: 'ofertas', desc: '多个职位的对比与排名。' },
          { name: 'pdf', desc: '针对特定职位优化的个性化 ATS 简历，包含核心竞争力及关键词。' },
          { name: 'pipeline', desc: '从收件箱批量处理 URL。' },
          { name: 'scan', desc: '职位搜索：浏览招聘门户和目标公司的招聘页面。许多职位不会出现在聚合平台上。' },
          { name: 'batch', desc: '使用 Conductor + Workers 进行并行处理。同时处理队列中的 122 个 URL。' },
          { name: 'apply', desc: '使用 Playwright 进行交互式表单填写。阅读页面、检索评估结果并生成回答。' },
          { name: 'contacto', desc: 'LinkedIn 外联辅助工具。' },
          { name: 'deep', desc: '对公司进行深度研究。' },
          { name: 'tracker', desc: '申请状态仪表盘。' },
          { name: 'training', desc: '根据北极星目标评估课程和认证。' },
        ],
      },
      scoring: {
        heading: 'Career-Ops 如何评估每个职位？',
        body: '每个职位都会经过一个包含 10 个加权维度的评估框架。输出结果是一个数值分数 (1-5) 和一个 A-F 的等级。并非所有维度的权重都相同 — 职位匹配和技能对齐是“准入门槛”：如果这两项失败，最终分数将大幅下降。',
        dimensions: {
          headers: ['维度', '衡量指标', '权重'],
          rows: [
            ['职位匹配', '岗位要求与简历核心竞争力的契合度', '准入门槛'],
            ['技能对齐', '技术栈重合度', '准入门槛'],
            ['资历', '挑战程度与可谈判空间', '高'],
            ['补偿', '市场价与目标的差距', '高'],
            ['地理位置', '远程/混合/现场办公的可行性', '中'],
            ['公司阶段', '初创/增长/大厂契合度', '中'],
            ['产品市场匹配度', '问题领域的共鸣程度', '中'],
            ['增长轨迹', '职业晋升空间', '中'],
            ['面试可能性', '获得回调的概率', '高'],
            ['时间线', '入职速度与紧迫性', '低'],
          ],
        },
        distribution: {
          heading: '分数分布',
          items: [
            { value: '21', label: '分数 >= 4.5 (A)' },
            { value: '52', label: '分数 4.0-4.4 (B)' },
            { value: '71', label: '分数 3.0-3.9 (C)' },
            { value: '51', label: '分数 < 3.0 (D-F)' },
          ],
        },
        callout: '74% 的评估职位分数低于 4.0。如果没有该系统，我本会浪费大量时间阅读那些根本不合适的 JD。',
      },
      pipeline: {
        heading: '从 URL 输入到生成简历，中间发生了什么？',
        body: 'auto-pipeline 是核心模式。输入一个 URL，输出一份评估报告、一份个性化 PDF 和一行追踪记录。在最终审核前零人工干预。',
        steps: [
          { label: '提取 JD。', detail: 'Playwright 导航至该 URL，提取职位的结构化内容。' },
          { label: '10D 评估。', detail: 'Claude 阅读 JD + 简历 + 作品集，并从 10 个维度生成评分。' },
          { label: '生成报告。', detail: '包含 6 个模块的 Markdown：执行摘要、简历匹配、职级、薪资、个性化和面试可能性。' },
          { label: '生成 PDF。', detail: 'HTML 模板 + 关键词注入 + 自适应框架。使用 Puppeteer 渲染为 PDF。' },
          { label: '登记追踪。', detail: '包含公司、角色、分数、等级、URL 的 TSV 文件。通过 Node.js 脚本自动合并。' },
          { label: '去重。', detail: '检查 scan-history.tsv (680 个 URL) 和 applications.md。零重复评估。' },
        ],
        batch: {
          heading: '批量处理',
          body: '针对高业务量，batch 模式会启动一个 Conductor 来编排并行 Workers。每个 Worker 都是一个独立的 Claude Code 进程，拥有 200K 上下文。Conductor 负责管理队列、追踪进度并合并结果。',
          metrics: [
            { value: '122', label: '队列中的 URL' },
            { value: '200K', label: '每个 Worker 的上下文' },
            { value: '2x', label: '失败重试次数' },
          ],
          details: '容错性：单个 Worker 失败不会阻塞其他 Worker。锁文件防止重复执行。批量处理支持断点续传 — 读取状态并跳过已完成项。',
        },
      },
      pdf: {
        heading: 'Career-Ops 如何为每个职位生成个性化简历？',
        body: '通用的简历注定失败。Career-Ops 作为一个 AI 简历构建器，能为每个职位生成不同的 ATS 优化简历，注入 JD 关键词并按相关性重新排序经历。这不是套用模板：而是从真实的简历核心竞争力中构建出来的简历。',
        steps: [
          { label: '从 JD 中提取 15-20 个关键词。', detail: '关键词会出现在总结、每个角色的第一条描述以及技能部分。' },
          { label: '语言检测。', detail: '英文 JD 生成英文简历。中文 JD 生成中文简历。' },
          { label: '地区检测。', detail: '美国公司生成 Letter 格式。欧洲公司生成 A4 格式。' },
          { label: '架构检测。', detail: '北极星目标的 6 种架构。总结会根据个人资料进行调整。' },
          { label: '精选项目。', detail: '按相关性排名前 3-4 个。Jacobo 用于智能体角色。Business OS 用于 ERP/自动化角色。' },
          { label: '重新排序描述。', detail: '最相关的经历上移，其余下移 — 但不会消失。' },
          { label: '渲染 PDF。', detail: 'Puppeteer 将 HTML 转换为 PDF。字体自托管，单栏 ATS 安全格式。' },
        ],
        archetypes: {
          heading: '6 种架构',
          headers: ['架构', '主要核心竞争力'],
          rows: [
            ['AI 平台 / LLMOps', '自愈聊天机器人 (71 个评估，闭环系统)', '/zi-yu-liao-tian-ji-qi-ren'],
            ['代理工作流', 'Jacobo (4 个智能体，每月自动化 80 小时)', '/agente-ia-jacobo'],
            ['技术 AI PM', 'Business OS (2,100 个字段，50 个自动化)', '/business-os-para-airtable'],
            ['AI 解决方案架构师', '程序化 SEO (4,730 个页面，10.8倍流量)', '/seo-programatico'],
            ['AI FDE', 'Jacobo (已售出，在生产环境中运行)', '/agente-ia-jacobo'],
            ['AI 转型主管', '4 年以上经验 (Walmart, Sagent)', ''],
          ],
        },
        callout: '同样的经历。6 种不同的包装。全部真实 — 关键词会被重新表述，绝非伪造。',
      },
      beforeAfter: {
        heading: '之前与之后',
        headers: ['维度', '手动', 'Career-Ops'],
        rows: [
          ['评估', '阅读 JD，心智映射', '10D 自动评分，A-F 等级'],
          ['简历', '通用 PDF', '个性化 PDF，针对 ATS 优化'],
          ['申请', '手动填表', 'Playwright 自动填充'],
          ['追踪', '表格或完全没有', 'TSV + 自动去重'],
          ['发现', 'LinkedIn 提醒', '扫描器：招聘门户 + 目标公司招聘页面'],
          ['批量', '一次一个', '122 个 URL 并行处理'],
          ['去重', '靠脑子记', '680 个 URL 自动去重'],
        ],
      },
      results: {
        heading: 'Career-Ops 取得了哪些成果？',
        body: '最重要的结果：我拿到了 Offer。我现在是应用 AI 负责人。Career-Ops 评估了 631 个职位，生成了 354 份个性化 PDF，并过滤了杂音，让我能专注于真正合适的机会。',
        metrics: [
          { value: '631', label: '生成报告' },
          { value: '35K+', label: 'GitHub Stars' },
          { value: '354', label: '生成 PDF' },
          { value: '2,600+', label: 'r/ClaudeAI 点赞' },
        ],
        aftermath: {
          heading: '之后发生了什么？',
          body: '当我不再需要 Career-Ops 时，我将其发布在 GitHub 上。在一周内，它从一个私人仓库变成了热门项目 — 获得 35.6K+ Stars，5K+ Forks，并被法国、中国和韩国完全不认识我的博主报道。Discord 上形成了一个 1,300 多人的社区，大家互相帮助配置和调整系统。该项目最终证明了我比任何面试过程都更强的能力。',
          highlights: [
            { value: '35K+', label: '1 周内获得 GitHub Stars' },
            { value: '5K+', label: 'Forks' },
            { value: '4', label: '语言 (EN, FR, ZH, KO)' },
            { value: '6', label: '报道国家' },
          ],
        },
      },
      stack: {
        heading: '技术栈',
        items: [
          { name: 'Claude Code', role: 'LLM 智能体：推理、评估、内容生成' },
          { name: 'Playwright', role: '浏览器自动化：门户扫描和表单填写' },
          { name: 'Puppeteer', role: '从 HTML 模板渲染 PDF' },
          { name: 'Node.js', role: '辅助脚本：追踪合并、CV 同步检查、生成 PDF' },
          { name: 'tmux', role: '并行会话：批量处理中的 Conductor + Workers' },
        ],
      },
      lessons: {
        heading: '经验教训',
        items: [
          {
            title: '自动化分析，而非决策',
            detail: 'Career-Ops 评估了 631 个职位。由我决定在哪些职位上投入时间。人机协作 (HITL) 并非限制，而是设计初衷。AI 过滤噪音，人类提供判断。'
          },
          {
            title: '模式胜过长提示词',
            detail: '12 种拥有精准上下文的模式优于一个 10,000 token 的系统提示词。每种模式仅加载其需要的内容。更少的上下文意味着更好的决策。'
          },
          {
            title: '去重比评分更有价值',
            detail: '680 个去重的 URL 意味着我省去了 680 次重复评估。去重比任何评分优化都更省时间。'
          },
          {
            title: '简历是辩论，而非文档',
            detail: '通用的 PDF 无法说服任何人。一份简历如果能按相关性重新组织经历、注入正确的关键词并调整包装架构 — 这样的简历才能转化。'
          },
          {
            title: '批量处理始终优于顺序处理',
            detail: '当我在做别的事情时，拥有并行 Worker 的 batch 模式会处理 122 个 URL。在并行编排上的投入在第一次运行时就值回票价。'
          },
          {
            title: '系统本身就是作品集',
            detail: '构建一个多智能体系统来寻找多智能体岗位，这是最直接的能力证明。我不需要解释我会做这个 — 我正在使用它。'
          },
          {
            title: '在不再需要时开源',
            detail: '在使用 Career-Ops 期间，它是私有的。当我拿到工作后，我发布了它。一周后它就获得了 35.6K Stars。教训：开源项目的最佳时机是它已经在真实的生产环境中证明了价值。'
          },
          {
            title: '为什么我坚持使用 MIT 协议',
            detail: 'MIT 协议。没有套路，CLI 内部没有加价，没有功能门槛。如果你觉得好用，那就用。如果你想支持维护或加入社区，欢迎。但工具本身不依赖于此。'
          },
        ],
      },
      cta: {
        sidebarLabel: '体验一下',
        heading: '在这里',
        body: 'Career-Ops 在 MIT 协议下开源。克隆它、Fork 它、改造它 — 它是属于你的。',
        ctaLabel: '在 GitHub 上体验',
        ctaHref: 'https://github.com/xueyifan/career-ops',
        communityHeading: '有疑问？问问社区',
        communityBody: '已有 1,300 多名开发者在使用 Career-Ops，并在 Discord 上分享技巧、模板和配置。',
        communityLabel: '加入 Discord',
        communityHref: 'https://discord.gg/8pRpHETxa4',
        supportHeading: '如果它为你节省了时间',
        supportRuleFree: '如果你正在积极找工作，那就专注于求职 — 工具是你的，没有任何附加条件。',
        supportRulePaid: '如果你已经找到了工作，并且该系统为你节省了大量时间，请我喝杯咖啡能让它保持活力。',
        supportFootnote: '100% 的资金将用于 API 成本和基础设施。',
        supportBmcLabel: '请我喝杯咖啡',
        supportBmcHref: 'https://buymeacoffee.com/xueyifan',
      },
    },
    faq: {
      heading: '常见问题',
      items: [
        {
          q: '这算不算作弊？',
          a: 'Career-Ops 自动化的是分析，而非决策。我在投递前会阅读每份报告，在发送前会审核每份 PDF。这与 CRM 的哲学相同：系统负责组织，我负责决策。',
        },
        {
          q: '为什么用 Claude Code 而不是脚本管道？',
          a: '脚本无法推理。Career-Ops 会根据公司背景调整评分，在不造假的前提下重新表述关键词，并生成叙述性报告 — 而不仅仅是填充模板。',
        },
        {
          q: '运行这个需要多少钱？',
          a: '单次评估的边际成本为零。Career-Ops 运行在我的 Claude Max 20x 计划（200美元/月）上，我用它处理一切：作品集、聊天机器人、文章和 Career-Ops。评估了 631 次，没有一笔额外账单。',
        },
        {
          q: 'apply 模式会自动填表吗？',
          a: '它使用 Playwright 阅读页面，检索缓存的评估结果，并生成与评分一致的回答。我会在提交前进行审核 — 始终如此。',
        },
        {
          q: '当扫描器发现重复职位时会发生什么？',
          a: 'scan-history.tsv 存储了 680 个已查看的 URL。通过精确的 URL 匹配以及 applications.md 中的公司+角色归一化匹配。零重复评估。',
        },
        {
          q: '可以复刻吗？',
          a: '可以 — 代码在 GitHub 上开源 (github.com/xueyifan/career-ops)。需要能够访问 Playwright 的 Claude Code。技能文件定义了每种模式的逻辑。已有 35K+ 人查看、Fork 或改造了它。',
        },
        {
          q: '如何使用 Career-Ops？',
          a: 'Career-Ops 是一个本地工具，可以通过 Claude Code 从终端运行。克隆仓库，配置简历和偏好，然后根据需要启动模式：auto-pipeline 用于端到端评估职位，scan 用于在门户网站发现职位，batch 用于并行处理多个 URL，或 pdf 用于生成个性化简历。一切都在你的机器上运行 — 你的简历和个人数据永远不会离开你的电脑。如果你需要帮助，Discord 上有一个 1,000 多人的社区：discord.gg/8pRpHETxa4',
        },
        {
          q: '运行 Career-Ops 需要什么？',
          a: '需要包含工具访问权限的 Claude Code 计划（Claude Max 或 Claude Pro）。用于网页导航的 Playwright。用于追踪合并及 Puppeteer 生成 PDF 的 Node.js。一个包含 Markdown 格式简历和搜索偏好的工作目录。不需要服务器、数据库或外部 API — 全都在本地运行。Discord 社区 (discord.gg/8pRpHETxa4) 可以协助配置。',
        },
        {
          q: 'Career-Ops 使用哪种 AI？',
          a: 'Career-Ops 不是聊天机器人或 API 包装器。它是一个多智能体系统，Claude Code 在其中充当大脑：对每个职位进行推理，从 10 个维度评估其与你的个人资料的匹配度，并做出过滤决策。12 种模式中的每一种都是一个拥有独立上下文和规则的技能文件。网页导航使用 Playwright，PDF 使用 Puppeteer，批量处理在 tmux 中启动并行 Workers。没有微调或自定义模型 — 只是使用了非常精准上下文的标准 Claude。',
        },
        {
          q: '谁创建了 Career-Ops？',
          a: '是我，薛一凡 (xueyifan)。在 Walmart 和 Sagent 等公司工作 4 年多后，我为自己的 AI 求职构建了它。该系统评估了 631 个职位，帮助我拿到了目前应用 AI 负责人的职位。当我不再需要它时，我将其开源。在一周内它就获得了 35.6K+ GitHub Stars。目前 Discord 社区人数已超过 1,300 人：discord.gg/8pRpHETxa4',
        },
      ],
    },
  },
  en: {
    slug: 'career-ops-system',
    altSlug: 'career-ops',
    readingTime: '18 min read',
    seo: {
      title: 'Career-Ops: The AI Agent System that Automated my Job Search',
      description: 'Case study: A multi-agent system that evaluates roles across 10 dimensions, generates personalized resumes per job, and automates applications. 631 evaluations done.',
    },
    nav: {
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Career-Ops',
    },
    header: {
      kicker: 'Case Study: From Personal Project to 35.6K+ Stars',
      h1: 'Career-Ops: How an AI Agent Automated my Path to Hired',
      subtitle: 'I built a multi-agent system to automate my own job search. It worked: I’m now Head of Applied AI. Then I open-sourced it, and it went viral — 35.6K+ Stars on GitHub.',
      badge: 'Mission Accomplished',
      date: 'March 17, 2026',
    },
    heroMetrics: [
      { value: '631', label: 'Evals' },
      { value: '302', label: 'Applications' },
      { value: '12', label: 'Modes' },
      { value: '10', label: 'Dimensions' },
      { value: '680', label: 'Deduplicated URLs' },
    ],
    tldr: 'A multi-agent system built with Claude Code that automates the job search: scores roles from A-F across 10 dimensions, generates targeted PDF resumes, fills forms via Playwright, and processes batches with parallel workers. Human-in-the-loop design: AI analyzes, I decide. Open sourced under MIT — 35.6K+ Stars, 1,300+ Discord members.',
    manifesto: 'Companies use AI to filter candidates. I just enabled the candidate to use AI to filter companies.',
    metaCallout: "Irony: I built a multi-agent system to find a multi-agent role. The system proved my skills better than any interview. And no, it’s not cheating: Career-Ops automates analysis, not decisions.",
    closingCallback: "This system proves what an interview can't: in the AI age, what you build with AI is the only resume that matters.",
    internalLinks: {
      chatbot: {
        text: 'Self-Healing Chatbot | Case Study',
        href: '/self-healing-chatbot',
      },
      jacobo: {
        text: 'AI Agent Jacobo | Case Study',
        href: '/ai-agent-jacobo',
      },
      businessOs: {
        text: 'Business OS | Case Study',
        href: '/business-os-for-airtable',
      },
      pseo: {
        text: 'Programmatic SEO | Case Study',
        href: '/programmatic-seo',
      },
    },
    sections: {
      intro: {
        hook: "I built an AI system to find a job. It worked — I'm now Head of Applied AI. Then I released it on GitHub and it exploded: 35.6K+ Stars, viral reaches, and coverage in France, China, and Korea. The first week of my search was manual. By the second week, I wasn't applying anymore — I was building Career-Ops.",
        body: "After 631 evaluations, Career-Ops filters better than I do. Built as a multi-agent system, it reads job descriptions, scores them across 10 dimensions, and prepares personalized resumes. I review and decide, the AI does the heavy lifting. The system demonstrates the exact skills needed for the roles I was targetting — which didn't go unnoticed by employers.",
      },
      theProblem: {
        heading: 'Why did I need to automate the search?',
        body: 'Searching for a senior AI Engineer role is a full-time job. Every role requires reading the JD, mapping skills, tailoring the CV, writing a personalized blurb, and filling a 15-field form. If you target 10 roles a day, the math doesn’t add up.',
        painPoints: [
          { label: 'Repetitive reading.', detail: '70% of roles are not a fit. You usually find out after 800 words of JD.' },
          { label: 'Generic resumes.', detail: 'Static PDFs don’t highlight the most relevant core competencies for a specific role.' },
          { label: 'Manual form filling.', detail: 'Every platform asks the same questions in different formats. 15 copy-pastes per application.' },
          { label: 'No tracking.', detail: 'Without a system, you forget where you applied. Double-applying or losing follow-ups.' },
          { label: 'Zero feedback.', detail: 'Apply, wait, and never know if it was the fit, the resume, or the timing.' },
          { label: 'Global market.', detail: 'AI is moving globally. Local referrals don’t scale when applying to 6 different countries.' },
        ],
        punchline: 'It’s not hard, it’s just repetitive. And repetitive work should be automated.',
      },
      architecture: {
        heading: 'How does a multi-agent system work?',
        body: 'Career-Ops isn’t a script or an auto-apply bot. It’s a multi-agent system with 12 modes, each being a Claude Code skill file with its own context, rules, and tools. An AI agent that reasons about the domain and executes the right action.',
        whyModes: {
          heading: 'Why Modes instead of one big prompt',
          items: [
            { label: 'Clean context.', detail: 'Each mode only loads what it needs. auto-pipeline doesn’t load contact rules. apply doesn’t load scoring logic.' },
            { label: 'Testability.', detail: 'Each mode can be tested in isolation. Changing PDF logic never breaks the evaluation.' },
            { label: 'Independent evolution.', detail: 'Adding new modes doesn’t break existing ones. training was added 3 weeks after the first deploy.' },
          ],
        },
        modes: [
          { name: 'auto-pipeline', desc: 'The full pipeline: extract JD, score A-F, generate report, PDF, and track.' },
          { name: 'oferta', desc: 'Single job evaluation with 6 modules: Summary, CV Match, Leveling, Comp, Personalized, and Interview.' },
          { name: 'ofertas', desc: 'Comparison and ranking of multiple roles.' },
          { name: 'pdf', desc: 'Targeted, ATS-optimized resume injected with JD keywords and reranked by relevance.' },
          { name: 'pipeline', desc: 'Batch processing of URLs from your inbox.' },
          { name: 'scan', desc: 'The hunter: browses job portals and target company career pages. Many jobs never hit aggregators.' },
          { name: 'batch', desc: 'Parallel processing with Conductor + Workers. Handles 122 URLs in the queue at once.' },
          { name: 'apply', desc: 'Interactive form filling with Playwright. Reads the page, retrieves the eval, and generates answers.' },
          { name: 'contacto', desc: 'LinkedIn outreach assistant.' },
          { name: 'deep', desc: 'Deep research into a company.' },
          { name: 'tracker', desc: 'Dashboard for application status.' },
          { name: 'training', desc: 'Evaluates courses and certs based on your North Star goal.' },
        ],
      },
      scoring: {
        heading: 'How does Career-Ops score every job?',
        body: 'Every role goes through an evaluation framework with 10 weighted dimensions. The output is a numeric score (1-5) and an A-F grade. Not all dimensions are equal — Job Match and Skill Alignment are "knock-out" filters: if they fail, the final grade drops significantly.',
        dimensions: {
          headers: ['Dimension', 'Measurement', 'Weight'],
          rows: [
            ['Job Match', 'Alignment of the role with CV core competencies', 'Knock-out'],
            ['Skill Alignment', 'Tech stack overlap', 'Knock-out'],
            ['Seniority', 'Challenge level and room for negotiation', 'High'],
            ['Compensation', 'Gap between market rate and target', 'High'],
            ['Geography', 'Feasibility of remote/hybrid/onsite', 'Medium'],
            ['Company Stage', 'Fit for Startup/Growth/Big Tech', 'Medium'],
            ['Product Market Fit', 'Resonance with the problem domain', 'Medium'],
            ['Growth Trajectory', 'Room for career advancement', 'Medium'],
            ['Interview Likelihood', 'Probability of getting a callback', 'High'],
            ['Timeline', 'Speed of hiring and urgency', 'Low'],
          ],
        },
        distribution: {
          heading: 'Score Distribution',
          items: [
            { value: '21', label: 'Score >= 4.5 (A)' },
            { value: '52', label: 'Score 4.0-4.4 (B)' },
            { value: '71', label: 'Score 3.0-3.9 (C)' },
            { value: '51', label: 'Score < 3.0 (D-F)' },
          ],
        },
        callout: '74% of evaluated roles scored below 4.0. Without the system, I would have wasted hours reading JDs that were not a fit.',
      },
      pipeline: {
        heading: 'From URL to Resume: What happens in between?',
        body: 'auto-pipeline is the core mode. Input a URL, output an eval report, a personalized PDF, and a tracking entry. Zero manual intervention until final review.',
        steps: [
          { label: 'Extract JD.', detail: 'Playwright navigates to the URL and extracts the structured content of the role.' },
          { label: '10D Evaluation.', detail: 'Claude reads the JD + Resume + Portfolio and scores across 10 dimensions.' },
          { label: 'Generate Report.', detail: 'Markdown with 6 modules: Exec Summary, CV Match, Leveling, Comp, Personalization, and Interview Likelihood.' },
          { label: 'Generate PDF.', detail: 'HTML template + keyword injection + adaptive framework. Rendered via Puppeteer.' },
          { label: 'Log Tracking.', detail: 'TSV entry with Company, Role, Score, Grade, URL. Auto-merged by Node scripts.' },
          { label: 'Deduplicate.', detail: 'Checks scan-history.tsv (680 URLs) and applications.md. Zero double evals.' },
        ],
        batch: {
          heading: 'Batch Processing',
          body: 'For high volumes, batch starts a Conductor to orchestrate parallel workers. Each worker is an independent Claude Code process with 200K context. Conductor manages the queue, tracks progress, and merges results.',
          metrics: [
            { value: '122', label: 'URLs in queue' },
            { value: '200K', label: 'Context per worker' },
            { value: '2x', label: 'Retries on failure' },
          ],
          details: 'Fault tolerance: a single worker failure doesn’t block the rest. Lockfiles prevent double execution. Batch supports resume — reads state and skips completed items.',
        },
      },
      pdf: {
        heading: 'How Career-Ops generates a personalized resume for every role?',
        body: 'Generic resumes fail. Career-Ops acts as an AI resume builder that generates a different ATS-optimized resume for every job, injecting JD keywords and reranking experience by relevance. It’s not a template: it’s built from real resume core competencies.',
        steps: [
          { label: 'Extract 15-20 keywords from JD.', detail: 'Keywords appear in the summary, first bullet of every role, and skills section.' },
          { label: 'Language detection.', detail: 'English JD yields English resume. Chinese JD yields Chinese resume.' },
          { label: 'Geography detection.', detail: 'Letter format for US companies. A4 for Europe.' },
          { label: 'Archetype detection.', detail: '6 archetypes for North Star goals. Summary adapts to the profile.' },
          { label: 'Featured projects.', detail: 'Top 3-4 by relevance. Jacobo for Agent roles. Business OS for ERP/Automation.' },
          { label: 'Rerank bullets.', detail: 'Most relevant experience moves up, the rest moves down — but stays visible.' },
          { label: 'Render PDF.', detail: 'Puppeteer converts HTML to PDF. Fonts are self-hosted, single-column ATS-safe format.' },
        ],
        archetypes: {
          heading: 'The 6 Archetypes',
          headers: ['Archetype', 'Main Core Competency'],
          rows: [
            ['AI Platform / LLMOps', 'Self-Healing Chatbot (71 evals, closed-loop system)', '/self-healing-chatbot'],
            ['Agentic Workflows', 'Jacobo (4 agents, 80h/mo automated)', '/ai-agent-jacobo'],
            ['Technical AI PM', 'Business OS (2,100 fields, 50 automations)', '/business-os-for-airtable'],
            ['AI Solutions Architect', 'Programmatic SEO (4,730 pages, 10.8x traffic)', '/programmatic-seo'],
            ['AI FDE', 'Jacobo (Sold, running in production)', '/ai-agent-jacobo'],
            ['AI Transformation Lead', '4+ years of experience (Walmart, Sagent)', ''],
          ],
        },
        callout: 'Same experience. 6 different framings. All real — keywords are rephrased, never faked.',
      },
      beforeAfter: {
        heading: 'Before and After',
        headers: ['Dimension', 'Manual', 'Career-Ops'],
        rows: [
          ['Evaluation', 'Read JD, mental mapping', '10D auto-scoring, A-F grades'],
          ['Resume', 'Generic PDF', 'Personalized PDF, ATS-optimized'],
          ['Application', 'Manual filling', 'Playwright auto-fill'],
          ['Tracking', 'Sheet or none', 'TSV + auto-deduplication'],
          ['Discovery', 'LinkedIn alerts', 'Scanner: portals + target company pages'],
          ['Volume', 'One by one', '122 URLs parallel batch'],
          ['Deduplication', 'Memory-based', '680 URLs auto-deduplicated'],
        ],
      },
      results: {
        heading: 'What were the results of Career-Ops?',
        body: 'The only result that matters: I got the Offer. I am now Head of Applied AI. Career-Ops evaluated 631 roles, generated 354 personalized PDFs, and filtered the noise so I could focus on the real opportunities.',
        metrics: [
          { value: '631', label: 'Reports generated' },
          { value: '35K+', label: 'GitHub Stars' },
          { value: '354', label: 'PDFs generated' },
          { value: '2,600+', label: 'r/ClaudeAI upvotes' },
        ],
        aftermath: {
          heading: 'What happened after?',
          body: "When I didn't need Career-Ops anymore, I posted it on GitHub. In one week, it went from a private repo to the trending list — 35.6K+ Stars, 5K+ Forks, and coverage by creators in France, China, and Korea who I had never met. A community of 1,300+ formed on Discord helping each other configure and adapt the system. The project ended up proving my skills better than any interview process could.",
          highlights: [
            { value: '35K+', label: 'GitHub Stars in 1 week' },
            { value: '5K+', label: 'Forks' },
            { value: '4', label: 'Languages (EN, FR, ZH, KO)' },
            { value: '6', label: 'Countries covered' },
          ],
        },
      },
      stack: {
        heading: 'Tech Stack',
        items: [
          { name: 'Claude Code', role: 'LLM Agent: reasoning, evaluation, content generation' },
          { name: 'Playwright', role: 'Browser automation: portal scanning and form filling' },
          { name: 'Puppeteer', role: 'Rendering PDFs from HTML templates' },
          { name: 'Node.js', role: 'Utility scripts: tracking merge, CV sync check, PDF generation' },
          { name: 'tmux', role: 'Parallel sessions: Conductor + Workers in batch processing' },
        ],
      },
      lessons: {
        heading: 'Lessons Learned',
        items: [
          {
            title: 'Automate analysis, not decisions',
            detail: 'Career-Ops scored 631 roles. I decided where to spend my time. HITL (Human-in-the-loop) isn’t a limitation, it’s a design choice. AI filters noise, humans provide judgment.'
          },
          {
            title: 'Modes beat long prompts',
            detail: '12 modes with clean context are better than one 10,000 token system prompt. Each mode only loads what it needs. Smaller context means better decisions.'
          },
          {
            title: 'Deduplication is more valuable than scoring',
            detail: '680 deduplicated URLs means 680 double evaluations saved. Deduplication saves more time than any scoring optimization.'
          },
          {
            title: 'Resumes are arguments, not documents',
            detail: 'Generic PDFs don’t convince anyone. A resume that reranks experience by relevance, injects the right keywords, and adjusts the archetype is a resume that converts.'
          },
          {
            title: 'Batch beats sequential every time',
            detail: 'Batch with parallel workers processed 122 URLs while I was doing something else. The investment in parallel orchestration paid for itself on the first run.'
          },
          {
            title: 'The system is the portfolio',
            detail: 'Building a multi-agent system to find a multi-agent role is the ultimate proof of skill. I don’t have to explain I can do it — I’m using it.'
          },
          {
            title: 'Open source when you don’t need it anymore',
            detail: "While I was using Career-Ops, it was private. When I got the job, I released it. A week later it had 35.6K Stars. Lesson: the best time to open source is when the value is already proven in a real-world production environment."
          },
          {
            title: 'Why I stay MIT',
            detail: 'MIT License. No hooks, no upsell inside the CLI, no gated features. If it helps you, use it. If you want to support maintenance or join the community, great. But the tool doesn’t depend on it.'
          },
        ],
      },
      cta: {
        sidebarLabel: 'Try it',
        heading: 'It’s right here',
        body: 'Career-Ops is open source under MIT. Clone it, fork it, break it — it’s yours.',
        ctaLabel: 'Try it on GitHub',
        ctaHref: 'https://github.com/xueyifan/career-ops',
        communityHeading: 'Questions? Ask the community',
        communityBody: '1,300+ developers are using Career-Ops and sharing tips, templates, and configs on Discord.',
        communityLabel: 'Join Discord',
        communityHref: 'https://discord.gg/8pRpHETxa4',
        supportHeading: 'If it saves you time',
        supportRuleFree: 'If you are actively looking for a job, focus on the search — the tool is yours, no strings attached.',
        supportRulePaid: 'If you already landed a role and the system saved you hours of work, a coffee keeps it alive.',
        supportFootnote: '100% of funds go to API costs and infrastructure.',
        supportBmcLabel: 'Buy me a coffee',
        supportBmcHref: 'https://buymeacoffee.com/xueyifan',
      },
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'Is this cheating?',
          a: 'Career-Ops automates analysis, not decisions. I read every report before applying and review every PDF before sending. It’s the same philosophy as a CRM: the system organizes, I decide.',
        },
        {
          q: 'Why Claude Code instead of a scripted pipeline?',
          a: 'Scripts can’t reason. Career-Ops adjusts scoring based on company context, rephrases keywords without lying, and generates narrative reports instead of just filling templates.',
        },
        {
          q: 'How much does it cost to run?',
          a: 'Zero marginal cost per eval. Career-Ops runs on my Claude Max 20x plan ($200/mo), which I use for everything: portfolio, chatbot, articles, and Career-Ops. 631 evals later, no extra bill.',
        },
        {
          q: 'Does apply fill forms automatically?',
          a: 'It uses Playwright to read the page, retrieve cached eval results, and generate answers consistent with the scoring. I review before hitting submit — always.',
        },
        {
          q: 'What happens when the scanner finds a duplicate job?',
          a: 'scan-history.tsv stores 680 URLs already seen. Matching is done by exact URL and normalized Company + Role in applications.md. Zero double evals.',
        },
        {
          q: 'Can I fork it?',
          a: 'Yes — the code is public on GitHub (github.com/xueyifan/career-ops). Needs Claude Code with tool access. Skill files define the logic for every mode. 35K+ people have already viewed, forked, or adapted it.',
        },
        {
          q: 'How do I use Career-Ops?',
          a: "Career-Ops is a local tool that runs from your terminal via Claude Code. Clone the repo, configure your resume and preferences, and launch the modes as needed: auto-pipeline for end-to-end evaluation of a job, scan to discover roles in portals, batch to process multiple URLs in parallel, or pdf to generate a personalized resume. Everything runs on your machine — your resume and personal data never leave your computer. If you need help, there's a community of 1,000+ people on Discord: discord.gg/8pRpHETxa4",
        },
        {
          q: 'What do I need to run Career-Ops?',
          a: 'A Claude Code plan with tool access (Claude Max or Claude Pro). Playwright for web navigation. Node.js for tracking merge and Puppeteer for PDF generation. A working directory with your resume in Markdown and your search preferences. No servers, databases, or external APIs needed — it all runs locally. Discord community (discord.gg/8pRpHETxa4) can assist with configuration.',
        },
        {
          q: 'Which AI does Career-Ops use?',
          a: 'Career-Ops is not a chatbot or an API wrapper. It is a multi-agent system where Claude Code acts as the brain: reasoning about every job, evaluating its fit against your profile across 10 dimensions, and making filtering decisions. Each of the 12 modes is a skill file with its own context and rules. Web navigation uses Playwright, PDFs use Puppeteer, and batch processing launches parallel workers in tmux. No fine-tuning or custom models — just standard Claude with very precise context.',
        },
        {
          q: 'Who created Career-Ops?',
          a: 'Me, Yifan Xue (xueyifan). I built it for my own AI job search after 4+ years at companies like Walmart and Sagent. The system evaluated 631 roles and helped me land my current role as Head of Applied AI. I open-sourced it when I didn’t need it anymore. Within a week it had 35.6K+ GitHub Stars. Currently the Discord community is over 1,300 people: discord.gg/8pRpHETxa4',
        },
      ],
    },
  },
} as const;

...
