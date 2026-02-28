"use client"

import { useRef } from "react"
import {
  Award,
  Star,
  Zap,
  Shield,
  Trophy,
  Heart,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const achievements = [
  { icon: Trophy, label: "Team Leadership", desc: "Led 8-member development team" },
  { icon: Star, label: "30+ Projects", desc: "Successfully delivered projects" },
  { icon: Zap, label: "Performance Expert", desc: "Optimized apps for speed" },
  { icon: Shield, label: "99.9% Uptime", desc: "Production reliability champion" },
  { icon: Award, label: "Mentor", desc: "Grew 5 juniors to mid-level" },
  { icon: Heart, label: "Open Source", desc: "Active community contributor" },
]

export function AchievementBadges() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Achievements"
          title="Milestones & Recognition"
          description="Key achievements and badges earned throughout my career."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {achievements.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                "group flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-700 hover:border-primary/30 hover:glow-primary",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
