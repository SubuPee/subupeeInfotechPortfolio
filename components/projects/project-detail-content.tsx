"use client"

import { useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  ChevronRight,
  Layers,
  Target,
  Users,
  Lightbulb,
  Wrench,
  TrendingUp,
  BarChart3,
  Rocket,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { MagneticButton } from "@/components/magnetic-button"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProjectDetailContentProps {
  project: Project
  prevProject: Project | null
  nextProject: Project | null
}

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ProjectDetailContent({ project, prevProject, nextProject }: ProjectDetailContentProps) {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-accent/10 blur-[120px]" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
            <Link href="/projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{project.title}</span>
          </nav>

          <div className="animate-slide-up">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">{project.tagline}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <MagneticButton
              href={project.liveUrl}
              target="_blank"
              className="bg-primary text-primary-foreground hover:glow-primary"
            >
              <ExternalLink size={16} />
              Live Demo
            </MagneticButton>
            <MagneticButton
              href={project.githubUrl}
              target="_blank"
              className="border border-border text-foreground hover:border-primary/50"
            >
              <Github size={16} />
              Source Code
            </MagneticButton>
          </div>

          {/* Hero visual */}
          <div className="mt-12 animate-slide-up overflow-hidden rounded-2xl border border-border/50 bg-card" style={{ animationDelay: "0.3s" }}>
            <div className="flex aspect-video items-center justify-center bg-secondary/30">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/20">
                  <Layers size={32} className="text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">{project.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="mb-8 text-3xl font-bold">Project Overview</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedSection delay={100}>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <Target size={24} className="mb-3 text-primary" />
                <h3 className="mb-2 font-bold text-foreground">Problem</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <Rocket size={24} className="mb-3 text-accent" />
                <h3 className="mb-2 font-bold text-foreground">Business Goal</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.goal}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <Users size={24} className="mb-3 text-primary" />
                <h3 className="mb-2 font-bold text-foreground">Target Audience</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.audience}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-border/30 bg-card/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold">
              <Lightbulb size={28} className="mr-2 inline text-primary" />
              Solution
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <h3 className="mb-4 text-xl font-bold text-foreground">Key Features</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-card p-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-8">
            <h3 className="mb-3 text-xl font-bold text-foreground">Architecture</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.architecture}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="mb-8 text-3xl font-bold">
              <Wrench size={28} className="mr-2 inline text-primary" />
              Tech Stack
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(project.techStack)
              .filter(([, items]) => items.length > 0 && items[0] !== "N/A")
              .map(([key, items], i) => (
                <AnimatedSection key={key} delay={i * 100}>
                  <div className="rounded-2xl border border-border/50 bg-card p-5">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {key}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="border-y border-border/30 bg-card/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="mb-8 text-3xl font-bold">Development Process</h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Planning", content: project.process.planning },
              { title: "UI/UX Strategy", content: project.process.uiux },
              { title: "Challenges Faced", content: project.process.challenges },
              { title: "Solutions Applied", content: project.process.solutions },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="mb-8 text-3xl font-bold">
              <TrendingUp size={28} className="mr-2 inline text-primary" />
              Results & Impact
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: BarChart3, title: "Performance", content: project.results.performance },
              { icon: Target, title: "Metrics", content: project.results.metrics },
              { icon: TrendingUp, title: "Growth", content: project.results.growth },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                  <item.icon size={28} className="mx-auto mb-3 text-primary" />
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider">Previous</span>
                  <p className="font-semibold text-foreground group-hover:text-primary">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="rounded-xl border border-border/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider">Next</span>
                  <p className="font-semibold text-foreground group-hover:text-primary">{nextProject.title}</p>
                </div>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </article>
  )
}
