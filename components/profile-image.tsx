'use client'

import { useState } from 'react'

export default function ProfileImage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const isResting = tilt.x === 0 && tilt.y === 0

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -18, y: x * 18 })
  }

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: 420, height: 420 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Outer slow-spinning dashed SVG ring */}
      <div className="absolute inset-0" style={{ animation: 'spin-slow 14s linear infinite' }}>
        <svg viewBox="0 0 380 380" className="w-full h-full" aria-hidden>
          <circle
            cx="190" cy="190" r="182"
            fill="none"
            stroke="oklch(0.75 0.19 70)"
            strokeWidth="1.2"
            strokeDasharray="8 22"
            strokeLinecap="round"
            opacity="0.5"
          />
          {[0, 90, 180, 270].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180
            const cx = 190 + 182 * Math.cos(rad)
            const cy = 190 + 182 * Math.sin(rad)
            return (
              <rect
                key={deg}
                x={cx - 4} y={cy - 4}
                width="8" height="8"
                fill="oklch(0.75 0.19 70)"
                transform={`rotate(45 ${cx} ${cy})`}
              />
            )
          })}
        </svg>
      </div>

      {/* Inner counter-spinning dotted SVG ring */}
      <div className="absolute inset-8" style={{ animation: 'spin-reverse 9s linear infinite' }}>
        <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden>
          <circle
            cx="150" cy="150" r="142"
            fill="none"
            stroke="oklch(0.98 0 0)"
            strokeWidth="0.6"
            strokeDasharray="2 18"
            opacity="0.18"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180
            const cx = 150 + 142 * Math.cos(rad)
            const cy = 150 + 142 * Math.sin(rad)
            const isPrimary = deg % 90 === 0
            return (
              <circle
                key={deg}
                cx={cx} cy={cy} r={isPrimary ? 3.5 : 2}
                fill={isPrimary ? 'oklch(0.75 0.19 70)' : 'oklch(0.98 0 0)'}
                opacity={isPrimary ? 1 : 0.25}
              />
            )
          })}
        </svg>
      </div>

      {/* 3D-tilt + float wrapper */}
      <div
        className="relative z-10"
        style={{
          animation: 'float 4.5s ease-in-out infinite',
          perspective: 800,
        }}
      >
        <div
          style={{
            transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isResting ? 'transform 0.55s ease' : 'transform 0.08s ease',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Glow behind */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.19 70 / 0.35) 0%, transparent 68%)',
              filter: 'blur(22px)',
              transform: 'translateZ(-10px) scale(1.15)',
              animation: 'pulse-glow 3.2s ease-in-out infinite',
            }}
          />

          {/* Photo circle */}
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid oklch(0.75 0.19 70)',
              boxShadow: '0 0 32px oklch(0.75 0.19 70 / 0.35), 0 0 80px oklch(0.75 0.19 70 / 0.12)',
              transform: 'translateZ(0)',
              position: 'relative',
            }}
          >
            <img
              src="/wais.jpeg"
              alt="Wais Alam"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.88) contrast(1.08) saturate(1.1)' }}
              draggable={false}
            />
            {/* Vignette overlay — blends white BG into dark theme */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 45%, transparent 42%, oklch(0.05 0 0 / 0.85) 75%, oklch(0.05 0 0) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Available badge — floats "forward" in 3D */}
          <div
            className="absolute -bottom-2 -right-6 px-3 py-1 bg-background border border-primary text-primary text-[10px] font-bold tracking-widest uppercase"
            style={{ transform: 'translateZ(28px)' }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 align-middle" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
            AVAILABLE
          </div>
        </div>
      </div>

      {/* Corner bracket SVGs */}
      {[
        { pos: 'top-1 left-1', d: 'M0 18 L0 0 L18 0' },
        { pos: 'top-1 right-1', d: 'M32 18 L32 0 L14 0' },
        { pos: 'bottom-1 left-1', d: 'M0 14 L0 32 L18 32' },
        { pos: 'bottom-1 right-1', d: 'M32 14 L32 32 L14 32' },
      ].map(({ pos, d }) => (
        <svg key={d} className={`absolute ${pos} w-8 h-8`} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d={d} stroke="oklch(0.75 0.19 70)" strokeWidth="2.5" />
        </svg>
      ))}
    </div>
  )
}
