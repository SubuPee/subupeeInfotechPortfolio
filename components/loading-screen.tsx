"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading")

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1
        return Math.min(prev + increment, 100)
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setPhase("revealing"), 300)
      return () => clearTimeout(timer)
    }
  }, [progress])

  useEffect(() => {
    if (phase === "revealing") {
      const timer = setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [phase, onComplete])

  const companyName = "SUBUPEE"
  const tagline = "INFOTECH"

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#060B18] overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000) - 500,
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800) - 400,
                opacity: 0,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* 3D Cube */}
          <div className="relative mb-12" style={{ perspective: "600px" }}>
            <motion.div
              className="loader-cube"
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d", width: 80, height: 80 }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 border-2 border-primary/60 bg-primary/10 backdrop-blur-sm"
                style={{ transform: "translateZ(40px)" }}
              />
              {/* Back */}
              <div
                className="absolute inset-0 border-2 border-accent/60 bg-accent/10 backdrop-blur-sm"
                style={{ transform: "translateZ(-40px) rotateY(180deg)" }}
              />
              {/* Right */}
              <div
                className="absolute inset-0 border-2 border-primary/40 bg-primary/5"
                style={{ transform: "rotateY(90deg) translateZ(40px)" }}
              />
              {/* Left */}
              <div
                className="absolute inset-0 border-2 border-accent/40 bg-accent/5"
                style={{ transform: "rotateY(-90deg) translateZ(40px)" }}
              />
              {/* Top */}
              <div
                className="absolute inset-0 border-2 border-success/40 bg-success/5"
                style={{ transform: "rotateX(90deg) translateZ(40px)" }}
              />
              {/* Bottom */}
              <div
                className="absolute inset-0 border-2 border-success/40 bg-success/5"
                style={{ transform: "rotateX(-90deg) translateZ(40px)" }}
              />
            </motion.div>

            {/* Glow under cube */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-primary/30 blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Company Name - letter by letter */}
          <div className="flex items-center gap-1 mb-2 overflow-hidden">
            {companyName.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-5xl font-bold tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ y: 60, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-sm md:text-base font-mono tracking-[0.4em] text-muted-foreground">
              {tagline}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-48 md:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="relative h-[2px] bg-border/30 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #10B981)",
                  width: `${progress}%`,
                }}
                transition={{ ease: "easeOut" }}
              />
              {/* Shimmer on bar */}
              <motion.div
                className="absolute inset-y-0 w-12 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
                animate={{ x: [-48, 260] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <motion.span
                className="text-xs font-mono text-muted-foreground/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                Initializing
              </motion.span>
              <span className="text-xs font-mono text-primary/80 tabular-nums">
                {progress}%
              </span>
            </div>
          </motion.div>

          {/* Orbiting ring */}
          <motion.div
            className="absolute w-[500px] h-[500px] border border-primary/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary/60" />
          </motion.div>
          <motion.div
            className="absolute w-[350px] h-[350px] border border-accent/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-accent/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
