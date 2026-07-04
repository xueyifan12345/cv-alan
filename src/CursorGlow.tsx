import { useEffect, useRef, useState } from 'react'

type CursorPosition = {
  x: number
  y: number
}

export default function CursorGlow() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return canHover && !reduceMotion
  })
  const cursor = useRef<CursorPosition>({ x: -400, y: -400 })
  const glow = useRef<CursorPosition>({ x: -400, y: -400 })
  const largeRef = useRef<HTMLDivElement>(null)
  const smallRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const onPointerMove = (event: PointerEvent) => {
      cursor.current = { x: event.clientX, y: event.clientY }
    }

    let frame = 0
    const animate = () => {
      const target = cursor.current
      const current = glow.current
      current.x += (target.x - current.x) * 0.16
      current.y += (target.y - current.y) * 0.16

      if (largeRef.current) {
        largeRef.current.style.transform = `translate3d(${current.x - 150}px, ${current.y - 150}px, 0) rotate(${current.x * 0.02}deg)`
      }
      if (smallRef.current) {
        smallRef.current.style.transform = `translate3d(${current.x - 60}px, ${current.y - 60}px, 0)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x - 4}px, ${target.y - 4}px, 0)`
      }

      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      <div ref={largeRef} className="cursor-glow cursor-glow-lg" />
      <div ref={smallRef} className="cursor-glow cursor-glow-sm" />
      <div ref={dotRef} className="cursor-glow-dot" />
    </div>
  )
}
