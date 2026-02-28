"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"

type Variant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "rotate-in" | "flip-up"

const variants: Record<Variant, { hidden: Record<string, number>; visible: Record<string, number> }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -5, y: 30 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: -15, y: 30 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
}

interface ScrollRevealProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const v = variants[variant]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
