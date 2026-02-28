"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"

const categoryColors: Record<string, string> = {
  SaaS: "border-primary/30 bg-primary/10 text-primary",
  "E-commerce": "border-accent/30 bg-accent/10 text-accent",
  Travel: "border-success/30 bg-success/10 text-success",
  "Web App": "border-primary/30 bg-primary/10 text-primary",
  "UI/UX": "border-accent/30 bg-accent/10 text-accent",
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block flex-shrink-0"
    >
      <motion.div
        whileHover={{ y: -8, rotateY: 3, rotateX: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-[400px] overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] backdrop-blur-sm transition-colors duration-500 hover:border-primary/30 md:w-[450px]"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        {/* Thumbnail area with real image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 400px, 450px"
          />
          {/* Glare overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:via-white/5 group-hover:to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <span
              className={cn(
                "inline-block rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
                categoryColors[project.category] || "border-primary/30 bg-primary/10 text-primary",
              )}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <ArrowRight
              size={18}
              className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
            />
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.frontend.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["5%", "-45%"])

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Featured Work"
          title="Selected Projects"
          description="A showcase of our most impactful work, from SaaS platforms to design systems."
        />
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative">
        <div className="overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:gap-3"
          >
            View All Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
