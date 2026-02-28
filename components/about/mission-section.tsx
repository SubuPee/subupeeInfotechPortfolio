"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    color: "primary",
    description:
      "To empower businesses with technology that drives real growth. We build software that solves problems, delights users, and scales with your ambitions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "accent",
    description:
      "To become the most trusted tech partner for startups and enterprises alike -- known for engineering excellence, transparent communication, and delivering on every promise.",
  },
  {
    icon: Heart,
    title: "Our Values",
    color: "success",
    description:
      "Quality over quantity. Transparency over shortcuts. We treat every project like our own product -- obsessing over details, writing clean code, and shipping software we are proud of.",
  },
]

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-28">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Who We Are"
          title="Mission, Vision & Values"
          description="The guiding principles behind everything we build at Subupee Infotech."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, i) => {
            const Icon = item.icon
            const colorClasses = item.color === "primary"
              ? "bg-primary/10 text-primary group-hover:bg-primary/20"
              : item.color === "accent"
                ? "bg-accent/10 text-accent group-hover:bg-accent/20"
                : "bg-success/10 text-success group-hover:bg-success/20"
            const borderHover = item.color === "primary"
              ? "hover:border-primary/30"
              : item.color === "accent"
                ? "hover:border-accent/30"
                : "hover:border-success/30"
            return (
              <div
                key={item.title}
                className={cn(
                  "group rounded-2xl border border-border/30 bg-card p-8 transition-all duration-700",
                  borderHover,
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={cn(
                  "mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                  colorClasses
                )}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
