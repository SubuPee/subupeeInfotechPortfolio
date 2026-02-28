"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { projects, categories } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div ref={ref}>
      <SectionHeading
        label="Portfolio"
        title="All Projects"
        description="Explore my complete body of work across different domains and technologies."
      />

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
              activeCategory === cat
                ? "bg-primary text-primary-foreground glow-primary"
                : "border border-border/50 bg-card text-muted-foreground shadow-[var(--card-shadow)] hover:border-primary/30 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <div
            key={project.slug}
            className={cn(
              "transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <Link href={`/projects/${project.slug}`} className="group block">
              <TiltCard className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[var(--card-shadow-hover)]">
                {/* Thumbnail with real image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/30 bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.backend.length > 0 && (
                      <span className="rounded-md border border-border/30 bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        +{project.techStack.backend.length} more
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
