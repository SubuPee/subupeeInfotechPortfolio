"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { techCategories } from "@/lib/data"
import { cn } from "@/lib/utils"

export function TechGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-32">
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Technology Stack"
          title="Tools & Technologies"
          description="The technologies and tools I use to bring ideas to life."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={cn(
                "rounded-2xl border border-border/30 bg-card p-6 transition-all duration-700 hover:border-primary/30",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="mb-4 text-lg font-bold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
