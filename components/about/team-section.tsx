"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const teamMembers = [
  {
    name: "Founder & CEO",
    role: "Full Stack Architect",
    initials: "SI",
    description:
      "4+ years of engineering leadership. Drives architecture decisions, client strategy, and team growth.",
    skills: ["React", "Node.js", "System Design", "AWS"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Lead Designer",
    role: "UI/UX Specialist",
    initials: "LD",
    description:
      "Pixel-perfect craftsman with a passion for accessibility, design systems, and conversion-optimised interfaces.",
    skills: ["Figma", "Prototyping", "Design Systems", "Motion"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Backend Engineer",
    role: "API & Database Expert",
    initials: "BE",
    description:
      "Builds the robust engines under the hood -- APIs, databases, and cloud infrastructure that never go down.",
    skills: ["Node.js", "Java", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Frontend Engineer",
    role: "React & Next.js Dev",
    initials: "FE",
    description:
      "Brings designs to life with blazing-fast, accessible, and beautifully animated frontends.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "DevOps Engineer",
    role: "Cloud & CI/CD",
    initials: "DO",
    description:
      "Keeps the pipeline green and the servers healthy -- automated deployments, monitoring, and scaling.",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "QA Engineer",
    role: "Testing & Quality",
    initials: "QA",
    description:
      "Catches every edge case before users do. Ensures every release meets our quality benchmark.",
    skills: ["Cypress", "Jest", "Manual QA", "Automation"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Project Manager",
    role: "Delivery & Strategy",
    initials: "PM",
    description:
      "Keeps projects on track, stakeholders informed, and the team aligned on priorities and deadlines.",
    skills: ["Agile", "Scrum", "Jira", "Client Relations"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Junior Developer",
    role: "Full Stack Trainee",
    initials: "JD",
    description:
      "Our rising star -- learning fast, contributing daily, and growing into the next generation of engineering talent.",
    skills: ["JavaScript", "React", "Node.js", "Git"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
  },
]

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section ref={ref} className="relative py-28">
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Our Team"
          title="The People Behind the Code"
          description="An 8-member team of specialists, each bringing unique expertise to every project we deliver."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <ScrollReveal
              key={member.initials + i}
              variant={i % 3 === 0 ? "fade-up" : i % 3 === 1 ? "fade-left" : "fade-right"}
              delay={i * 0.06}
            >
              <TiltCard className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--card-shadow-hover)]">
                  {/* Avatar image */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                      <p className="text-xs font-semibold text-primary">{member.role}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border/30 bg-secondary px-2 py-1 text-[10px] font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
