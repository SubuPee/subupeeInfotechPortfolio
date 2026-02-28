"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/data"
import { cn } from "@/lib/utils"

function SkillBar({ skill, index, isInView }: { skill: (typeof skills)[0]; index: number; isInView: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setWidth(skill.level)
      }, index * 100)
      return () => clearTimeout(timeout)
    }
  }, [isInView, skill.level, index])

  return (
    <div
      className={cn(
        "transition-all duration-500",
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-success transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Proficiency"
          description="Technologies I work with daily and the proficiency level I've built over the years."
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
