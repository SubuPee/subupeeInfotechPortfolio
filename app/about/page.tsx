import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { AboutStats } from "@/components/about/about-stats"
import { TeamSection } from "@/components/about/team-section"
import { HowWeWorkSection } from "@/components/about/how-we-work-section"
import { WhyChooseUsSection } from "@/components/about/why-choose-us-section"
import { SkillsSection } from "@/components/about/skills-section"
import { TechGrid } from "@/components/about/tech-grid"
import { IndustriesSection } from "@/components/about/industries-section"

export const metadata: Metadata = {
  title: "About Subupee Infotech",
  description: "Learn about Subupee Infotech -- a tech agency with 4+ years of experience building scalable web applications and digital solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <AboutStats />
      <TeamSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <SkillsSection />
      <TechGrid />
      <IndustriesSection />
    </>
  )
}
