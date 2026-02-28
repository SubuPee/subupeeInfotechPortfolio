"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { Search, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We begin every engagement with deep research -- understanding your business, users, competitors, and goals. This phase produces a clear product roadmap and technical strategy.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Prototype",
    description:
      "Our designers transform strategy into wireframes and high-fidelity prototypes. We iterate with you until every screen feels right before a single line of code is written.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & Testing",
    description:
      "Agile sprints with daily progress. Feature branches, code reviews, and automated testing ensure every release is production-ready. You see working software every two weeks.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Deploy",
    description:
      "We handle the full deployment pipeline -- CI/CD, staging, production cutover, DNS, SSL, monitoring setup. Your product goes live with zero stress.",
  },
  {
    icon: LifeBuoy,
    step: "05",
    title: "Support & Growth",
    description:
      "Post-launch, we provide ongoing maintenance, performance monitoring, feature enhancements, and scaling support. We grow with you.",
  },
]

export function HowWeWorkSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="A battle-tested 5-phase process that turns ideas into shipped products."
        />

        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-accent/40 to-success/40 md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className={cn(
                    "relative flex items-start gap-6 transition-all duration-700",
                    isInView
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                    <Icon size={24} />
                  </div>

                  <div className="rounded-2xl border border-border/30 bg-card p-6 transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-primary">
                        Phase {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
