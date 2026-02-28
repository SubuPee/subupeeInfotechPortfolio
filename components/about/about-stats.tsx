"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { AnimatedCounter } from "@/components/animated-counter"
import { stats } from "@/lib/data"
import { cn } from "@/lib/utils"

export function AboutStats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
              "glass rounded-2xl p-6 text-center transition-all duration-700 hover:border-primary/30",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary md:text-4xl">
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
