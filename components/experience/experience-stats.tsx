"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { AnimatedCounter } from "@/components/animated-counter"
import { cn } from "@/lib/utils"

const detailedStats = [
  { label: "Lines of Code Written", value: 500, suffix: "K+" },
  { label: "Code Reviews Completed", value: 1200, suffix: "+" },
  { label: "Deployments Shipped", value: 350, suffix: "+" },
  { label: "Cups of Coffee", value: 2000, suffix: "+" },
]

export function ExperienceStats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section ref={ref} className="relative z-10 border-t border-border/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {detailedStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
