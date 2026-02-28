import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my work - from SaaS platforms to e-commerce solutions and design systems.",
}

export default function ProjectsPage() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-40 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ProjectsGrid />
      </div>
    </section>
  )
}
