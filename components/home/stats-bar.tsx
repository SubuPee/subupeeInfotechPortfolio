"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"
import { stats } from "@/lib/data"
import { Users, Briefcase, Clock, Heart } from "lucide-react"

const icons = [Clock, Briefcase, Users, Heart]

export function StatsBar() {
  return (
    <section className="relative border-y border-border/20 bg-card/30 py-20">
      {/* Subtle shimmer */}
      <div className="shimmer-line absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          style={{ perspective: "1000px" }}
        >
          {stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  z: 30,
                  transition: { duration: 0.3 },
                }}
                className="group relative text-center rounded-2xl border border-border/30 bg-card/50 p-6 shadow-[var(--card-shadow)] backdrop-blur-sm transition-shadow hover:shadow-[var(--card-shadow-hover)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D pop-out icon */}
                <motion.div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/40"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <Icon size={20} />
                </motion.div>
                <div
                  className="text-4xl font-bold text-foreground md:text-5xl"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
                <p
                  className="mt-2 text-sm text-muted-foreground"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {stat.label}
                </p>

                {/* Subtle depth shadow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
