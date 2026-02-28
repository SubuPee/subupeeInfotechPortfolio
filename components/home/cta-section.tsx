"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowRight, Sparkles } from "lucide-react"

/* Pure CSS 3D geometric shapes that orbit the CTA */
function FloatingCube({ className, delay, size }: { className: string; delay: number; size: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        y: [0, -20, 0],
      }}
      transition={{
        rotateX: { duration: 10, repeat: Infinity, ease: "linear", delay },
        rotateY: { duration: 14, repeat: Infinity, ease: "linear", delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      style={{ width: size, height: size, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 border border-primary/30 bg-primary/5" style={{ transform: `translateZ(${size / 2}px)` }} />
      <div className="absolute inset-0 border border-primary/30 bg-primary/5" style={{ transform: `translateZ(-${size / 2}px) rotateY(180deg)` }} />
      <div className="absolute inset-0 border border-accent/20 bg-accent/5" style={{ transform: `rotateY(90deg) translateZ(${size / 2}px)` }} />
      <div className="absolute inset-0 border border-accent/20 bg-accent/5" style={{ transform: `rotateY(-90deg) translateZ(${size / 2}px)` }} />
      <div className="absolute inset-0 border border-success/20 bg-success/5" style={{ transform: `rotateX(90deg) translateZ(${size / 2}px)` }} />
      <div className="absolute inset-0 border border-success/20 bg-success/5" style={{ transform: `rotateX(-90deg) translateZ(${size / 2}px)` }} />
    </motion.div>
  )
}

function FloatingPyramid({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateY: [0, 360],
        y: [0, -15, 0],
      }}
      transition={{
        rotateY: { duration: 12, repeat: Infinity, ease: "linear", delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="h-0 w-0"
        style={{
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderBottom: "28px solid rgba(139, 92, 246, 0.2)",
        }}
      />
    </motion.div>
  )
}

function FloatingRing({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        rotateX: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        rotateX: { duration: 8, repeat: Infinity, ease: "linear", delay },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div className="h-10 w-10 rounded-full border-2 border-primary/30" />
    </motion.div>
  )
}

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative overflow-hidden py-32" style={{ perspective: "1200px" }}>
      {/* Animated background glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-[20%] top-[30%] h-80 w-80 rounded-full bg-primary/8 blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[40%] h-80 w-80 rounded-full bg-accent/8 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--glow-primary-25) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 3D Floating geometric shapes */}
      <FloatingCube className="absolute left-[8%] top-[20%] hidden md:block" delay={0} size={30} />
      <FloatingCube className="absolute right-[10%] top-[25%] hidden md:block" delay={2} size={22} />
      <FloatingCube className="absolute left-[15%] bottom-[15%] hidden md:block" delay={4} size={18} />
      <FloatingPyramid className="absolute right-[15%] bottom-[25%] hidden md:block" delay={1} />
      <FloatingPyramid className="absolute left-[5%] top-[50%] hidden md:block" delay={3} />
      <FloatingRing className="absolute right-[8%] top-[55%] hidden md:block" delay={0.5} />
      <FloatingRing className="absolute left-[25%] top-[10%] hidden md:block" delay={2.5} />

      <motion.div style={{ y }} className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-sm"
        >
          <Sparkles size={14} />
          {"Let's Build Together"}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          Ready to Turn Your{" "}
          <span className="gradient-text text-glow">Vision</span> Into{" "}
          <span className="gradient-text text-glow-accent">Reality</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {"Whether it's a SaaS platform, e-commerce solution, or a full-scale travel booking system, we're here to deliver world-class software that scales."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="/contact" className="bg-primary text-primary-foreground hover:glow-primary">
            Start a Project
            <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton href="/projects" className="border border-border text-foreground hover:border-primary/50 hover:text-primary">
            View Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
