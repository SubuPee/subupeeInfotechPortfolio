"use client"

import { useRef } from "react"
import { Briefcase, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/lib/data"
import { cn } from "@/lib/utils"

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-700",
            isInView
              ? "border-primary/50 bg-primary/20 text-primary scale-100"
              : "border-border bg-card text-muted-foreground scale-90"
          )}
        >
          <Briefcase size={20} />
        </div>
        {!isLast && (
          <div className="relative w-px flex-1 bg-border/50">
            <div
              className="absolute inset-0 w-px bg-primary/50 transition-all duration-1000"
              style={{
                height: isInView ? "100%" : "0%",
                transitionDelay: "300ms",
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 pb-16 transition-all duration-700",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {experience.period}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
          <p className="mt-1 font-medium text-primary">{experience.company}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mt-4 space-y-2">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-success" />
                <span className="text-sm text-foreground">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceTimeline() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6">
      <SectionHeading
        label="Career Journey"
        title="Professional Experience"
        description="A timeline of my career growth, from coding my first app to leading development teams."
      />

      <div className="mt-12">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={exp.company}
            experience={exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
