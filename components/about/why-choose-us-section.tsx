"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedCounter } from "@/components/animated-counter"
import { cn } from "@/lib/utils"
import {
  ShieldCheck,
  Zap,
  Clock,
  MessageSquare,
  Award,
  HeadphonesIcon,
} from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every project comes with rigorous QA, automated tests, and a code quality guarantee. We don't ship until it's bulletproof.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile methodology with 2-week sprints means you see progress fast. MVPs in 4-6 weeks, full products in 8-12 weeks.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We respect deadlines like they're sacred. Transparent timelines, buffer planning, and proactive communication keep every project on track.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Daily standups, weekly demos, and a shared project dashboard. You always know exactly where your project stands.",
  },
  {
    icon: Award,
    title: "Industry Best Practices",
    description:
      "Clean architecture, SOLID principles, accessibility compliance, and performance optimization are standards -- not extras.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Launch Support",
    description:
      "Our relationship doesn't end at launch. We offer maintenance retainers, monitoring, and priority support for all our clients.",
  },
]

const proofStats = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "+", label: "Years in Business" },
]

export function WhyChooseUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-28">
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Why Subupee Infotech"
          title="Why Clients Choose Us"
          description="The principles and practices that set us apart from every other agency."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className={cn(
                  "group rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] p-6 transition-all duration-700 hover:border-accent/30 hover:shadow-[var(--card-shadow-hover)]",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Proof bar */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {proofStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "glass rounded-2xl p-6 text-center transition-all duration-700 hover:border-accent/30",
                statsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl font-bold text-accent md:text-4xl">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
