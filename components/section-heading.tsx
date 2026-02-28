"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn("mb-16", align === "center" ? "text-center" : "text-left")}
      style={{ perspective: "800px" }}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl"
        style={{ transformOrigin: "bottom center" }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-4 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed",
            align === "center" && "mx-auto"
          )}
          style={{ transformOrigin: "bottom center" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
