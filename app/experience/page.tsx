import type { Metadata } from "next"
import { ExperienceTimeline } from "@/components/experience/experience-timeline"
import { AchievementBadges } from "@/components/experience/achievement-badges"
import { ExperienceStats } from "@/components/experience/experience-stats"

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey - from junior developer to team lead, with key achievements and milestones.",
}

export default function ExperiencePage() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      <ExperienceTimeline />
      <AchievementBadges />
      <ExperienceStats />
    </section>
  )
}
