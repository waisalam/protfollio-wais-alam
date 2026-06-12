'use client'

import { useEffect, useRef, useState } from 'react'

const SECTION_IDS = [
  'section-projects',
  'section-services',
  'section-pricing',
  'section-stack',
  'section-cta',
]

export default function ScrollPath() {
  const lineRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])
  const branchesRef = useRef<(HTMLDivElement | null)[]>([])
  // thresholds: scroll progress (0–1) at which each section is reached
  const [thresholds, setThresholds] = useState<number[]>([])

  // Measure section positions after layout settles
  useEffect(() => {
    function measure() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const values = SECTION_IDS.map((id) => {
        const el = document.getElementById(id)
        if (!el) return -1
        return Math.min(el.offsetTop / total, 1)
      }).filter((v) => v >= 0)
      setThresholds(values)
    }

    const raf = requestAnimationFrame(measure)
    window.addEventListener('resize', measure, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Drive the animation from scroll — no React state on every frame
  useEffect(() => {
    if (thresholds.length === 0) return

    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? Math.min(window.scrollY / total, 1) : 0

      // Grow/shrink the progress line
      if (lineRef.current) {
        lineRef.current.style.height = `${progress * 100}%`
      }

      // Activate dots and branch arrows
      thresholds.forEach((t, i) => {
        const reached = progress >= t
        const dot = dotsRef.current[i]
        const branch = branchesRef.current[i]
        if (dot) {
          dot.style.backgroundColor = reached
            ? 'oklch(0.75 0.19 70)'
            : 'transparent'
          dot.style.boxShadow = reached
            ? '0 0 10px oklch(0.75 0.19 70 / 0.9), 0 0 20px oklch(0.75 0.19 70 / 0.4)'
            : 'none'
        }
        if (branch) {
          branch.style.width = reached ? '22px' : '0px'
          branch.style.opacity = reached ? '1' : '0'
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [thresholds])

  return (
    // Only show on very wide screens so it doesn't crowd the layout
    <div
      className="fixed top-0 left-5 h-screen pointer-events-none z-40 hidden 2xl:block"
      style={{ width: 40 }}
      aria-hidden
    >
      {/* Faint track */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: 19,
          width: 1,
          background: 'oklch(0.75 0.19 70 / 0.1)',
        }}
      />

      {/* Glowing progress line — height grows with scroll */}
      <div
        ref={lineRef}
        className="absolute top-0"
        style={{
          left: 19,
          width: 1,
          height: '0%',
          background:
            'linear-gradient(to bottom, oklch(0.75 0.19 70 / 0.3) 0%, oklch(0.75 0.19 70) 100%)',
          boxShadow: '0 0 6px oklch(0.75 0.19 70 / 0.6)',
          // no CSS transition — updated 60fps directly
        }}
      />

      {/* Section markers — positioned at their scroll threshold % of vh */}
      {thresholds.map((t, i) => (
        <div
          key={i}
          className="absolute flex items-center"
          style={{
            top: `${t * 100}%`,
            left: 12,
            transform: 'translateY(-50%)',
          }}
        >
          {/* Dot */}
          <div
            ref={(el) => { dotsRef.current[i] = el }}
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              border: '1.5px solid oklch(0.75 0.19 70)',
              backgroundColor: 'transparent',
              flexShrink: 0,
              transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
            }}
          />
          {/* Branch arrow pointing right */}
          <div
            ref={(el) => { branchesRef.current[i] = el }}
            style={{
              width: 0,
              height: 1,
              marginLeft: 3,
              backgroundColor: 'oklch(0.75 0.19 70)',
              boxShadow: '0 0 4px oklch(0.75 0.19 70)',
              flexShrink: 0,
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
              opacity: 0,
            }}
          />
        </div>
      ))}
    </div>
  )
}
