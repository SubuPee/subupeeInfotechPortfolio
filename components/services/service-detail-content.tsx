"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import type { ServiceDetail } from "@/lib/data"
import { cn } from "@/lib/utils"
import {
  Palette,
  Code2,
  Plug,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Zap,
  FileText,
  Layers,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  Code2,
  Plug,
  CreditCard,
}

// ─── Hero ───────────────────────────────────────────────────────────
function ServiceHero({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })
  const IconComp = iconMap[service.icon] ?? Zap
  const isPrimary = service.color === "primary"

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div
        className={cn(
          "absolute right-0 top-20 h-96 w-96 animate-pulse-glow rounded-full blur-[120px]",
          isPrimary ? "bg-primary/8" : "bg-accent/8"
        )}
      />
      <div
        className={cn(
          "absolute -left-20 bottom-0 h-72 w-72 animate-pulse-glow rounded-full blur-[100px]",
          isPrimary ? "bg-accent/5" : "bg-primary/5"
        )}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <Link
          href="/#services"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div
              className={cn(
                "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
                isPrimary
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              )}
            >
              <IconComp size={32} />
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {service.title.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-3 text-lg font-medium text-muted-foreground">
              {service.tagline}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.heroFeatures.map((f, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex items-center gap-2 rounded-xl border border-border/50 bg-card px-4 py-2.5 text-sm font-medium text-foreground"
                  )}
                >
                  <CheckCircle2
                    size={14}
                    className={isPrimary ? "text-primary" : "text-accent"}
                  />
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:gap-3",
                  isPrimary
                    ? "bg-primary text-primary-foreground hover:glow-primary"
                    : "bg-accent text-accent-foreground hover:glow-accent"
                )}
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40"
              >
                See Our Process
              </a>
            </div>
          </div>

          {/* Right decorative panel */}
          <div
            className={cn(
              "relative hidden transition-all duration-700 delay-200 lg:block",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div
                className={cn(
                  "absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border",
                  isPrimary ? "border-primary/10" : "border-accent/10"
                )}
              />
              <div
                className={cn(
                  "absolute inset-6 animate-[spin_25s_linear_infinite_reverse] rounded-full border",
                  isPrimary ? "border-accent/10" : "border-primary/10"
                )}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-2xl p-10 text-center">
                  <IconComp
                    size={64}
                    className={isPrimary ? "text-primary" : "text-accent"}
                  />
                  <p className="mt-4 text-lg font-bold text-foreground">
                    {service.title.split(" ").slice(-2).join(" ")}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    by Subupee Infotech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Overview ───────────────────────────────────────────────────────
function OverviewSection({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <SectionHeading label="Overview" title="What We Deliver" />
          <p className="text-center text-lg leading-relaxed text-muted-foreground">
            {service.overview}
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Process ────────────────────────────────────────────────────────
function ProcessSection({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const isPrimary = service.color === "primary"

  return (
    <section id="process" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="A proven methodology refined across dozens of successful projects."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border/50 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {service.process.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={step.step}
                  className={cn(
                    "relative flex items-start gap-6 transition-all duration-700 md:gap-12",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2",
                      isPrimary ? "bg-primary glow-primary" : "bg-accent glow-accent"
                    )}
                  />

                  {/* Content card */}
                  <div
                    className={cn(
                      "ml-12 w-full rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 md:ml-0 md:w-[calc(50%-2rem)]",
                      isLeft ? "" : ""
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-sm font-bold",
                        isPrimary ? "text-primary" : "text-accent"
                      )}
                    >
                      Step {step.step}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Capabilities ───────────────────────────────────────────────────
function CapabilitiesSection({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const isPrimary = service.color === "primary"

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Capabilities"
          title="What We Can Do"
          description="A comprehensive range of capabilities tailored to your needs."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={cn(
                "group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-700 hover:border-primary/30",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={cn(
                  "mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300",
                  isPrimary
                    ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                    : "bg-accent/10 text-accent group-hover:bg-accent/20"
                )}
              >
                <Layers size={20} />
              </div>
              <h3 className="text-base font-bold text-foreground">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Tech & Deliverables ────────────────────────────────────────────
function TechDeliverablesSection({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })
  const isPrimary = service.color === "primary"

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Technologies */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="mb-6 flex items-center gap-3">
              <Zap
                size={20}
                className={isPrimary ? "text-primary" : "text-accent"}
              />
              <h3 className="text-2xl font-bold text-foreground">
                Technologies We Use
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="mb-6 flex items-center gap-3">
              <FileText
                size={20}
                className={isPrimary ? "text-primary" : "text-accent"}
              />
              <h3 className="text-2xl font-bold text-foreground">
                What You Receive
              </h3>
            </div>
            <ul className="space-y-3">
              {service.deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2
                    size={16}
                    className={cn(
                      "shrink-0",
                      isPrimary ? "text-primary" : "text-accent"
                    )}
                  />
                  <span className="text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ────────────────────────────────────────────────────────────
function FaqSection({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          description="Answers to the questions we hear most often."
        />

        <div className="space-y-4">
          {service.faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border border-border/50 bg-card transition-all duration-700",
                  isOpen && "border-primary/30",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-60 pb-6" : "max-h-0"
                  )}
                >
                  <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ────────────────────────────────────────────────────────────
function ServiceCta({ service }: { service: ServiceDetail }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })
  const isPrimary = service.color === "primary"

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-border/50 bg-card p-12 text-center transition-all duration-700 md:p-16",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div
            className={cn(
              "absolute -left-20 -top-20 h-60 w-60 animate-pulse-glow rounded-full blur-[100px]",
              isPrimary ? "bg-primary/10" : "bg-accent/10"
            )}
          />
          <div
            className={cn(
              "absolute -bottom-20 -right-20 h-60 w-60 animate-pulse-glow rounded-full blur-[100px]",
              isPrimary ? "bg-accent/10" : "bg-primary/10"
            )}
          />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to get started with{" "}
              <span className="gradient-text">{service.title}</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              {"Let's discuss your project and find the perfect solution for your business needs."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:gap-3",
                  isPrimary
                    ? "bg-primary text-primary-foreground hover:glow-primary"
                    : "bg-accent text-accent-foreground hover:glow-accent"
                )}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Prev / Next Nav ────────────────────────────────────────────────
function ServiceNav({
  prev,
  next,
}: {
  prev: ServiceDetail | null
  next: ServiceDetail | null
}) {
  return (
    <section className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        {prev ? (
          <Link
            href={`/services/${prev.slug}`}
            className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <div>
              <p className="text-xs uppercase tracking-wider">Previous</p>
              <p className="text-sm font-semibold text-foreground">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center gap-3 text-right text-muted-foreground transition-colors hover:text-primary"
          >
            <div>
              <p className="text-xs uppercase tracking-wider">Next</p>
              <p className="text-sm font-semibold text-foreground">
                {next.title}
              </p>
            </div>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  )
}

// ─── Main Component ─────────────────────────────────────────────────
export function ServiceDetailContent({
  service,
  prevService,
  nextService,
}: {
  service: ServiceDetail
  prevService: ServiceDetail | null
  nextService: ServiceDetail | null
}) {
  return (
    <>
      <ServiceHero service={service} />
      <OverviewSection service={service} />
      <ProcessSection service={service} />
      <CapabilitiesSection service={service} />
      <TechDeliverablesSection service={service} />
      <FaqSection service={service} />
      <ServiceCta service={service} />
      <ServiceNav prev={prevService} next={nextService} />
    </>
  )
}
