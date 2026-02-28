"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className, intensity = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -intensity
    const rotateY = (x - 0.5) * intensity
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    )
    setGlare({ x: x * 100, y: y * 100, opacity: 0.15 })
  }

  const handleMouseLeave = () => {
    setTransform("")
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative transition-transform duration-300 ease-out", className)}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {children}
      {/* Reflective glare that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25), transparent 60%)`,
        }}
      />
      {/* Subtle edge highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, var(--glow-primary-08), transparent 50%)`,
        }}
      />
    </div>
  )
}
