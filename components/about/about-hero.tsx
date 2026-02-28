"use client"

import { useRef } from "react"
import { Users, Code2, Lightbulb } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: Code2, label: "4+ Years in Business" },
  { icon: Users, label: "8-Member Expert Team" },
  { icon: Lightbulb, label: "30+ Projects Delivered" },
]

export function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute right-0 top-20 h-96 w-96 animate-pulse-glow rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              We Are{" "}
              <span className="gradient-text">Subupee Infotech</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Subupee Infotech is a tech agency with over 4 years of experience
              building scalable web applications and delivering end-to-end digital
              solutions. We thrive at the intersection of engineering excellence
              and creative problem-solving.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our 8-member team of designers, developers, and strategists focuses
              on architecture decisions, cutting-edge technology, and delivering
              products that make a meaningful impact for businesses worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border border-border/50 bg-card shadow-[var(--card-shadow)] px-4 py-3 transition-all duration-500",
                    isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-300",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Decorative rings */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-primary/10" />
              <div className="absolute inset-4 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-accent/10" />
              <div className="absolute inset-8 animate-[spin_30s_linear_infinite] rounded-full border border-primary/5" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-2xl p-8 text-center shadow-2xl shadow-primary/10">
                  <div className="text-6xl font-bold gradient-text">4+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Years of Building</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="mt-4 text-4xl font-bold text-accent">8</div>
                  <p className="mt-1 text-sm text-muted-foreground">Team Members Led</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute left-0 top-1/4 animate-float rounded-xl glass px-3 py-2 text-xs font-medium text-primary">
                React
              </div>
              <div className="absolute right-0 top-1/3 animate-float rounded-xl glass px-3 py-2 text-xs font-medium text-accent" style={{ animationDelay: "1s" }}>
                TypeScript
              </div>
              <div className="absolute bottom-1/4 left-10 animate-float rounded-xl glass px-3 py-2 text-xs font-medium text-foreground" style={{ animationDelay: "2s" }}>
                Node.js
              </div>
              <div className="absolute bottom-1/3 right-10 animate-float rounded-xl glass px-3 py-2 text-xs font-medium text-primary" style={{ animationDelay: "0.5s" }}>
                Next.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
