"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import {
  Plane,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Landmark,
  Factory,
  ArrowRight,
} from "lucide-react"

const industries = [
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description:
      "Booking engines, itinerary builders, dynamic pricing, multi-vendor travel platforms, and airline/hotel API integrations.",
    projects: 8,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description:
      "Custom storefronts, marketplace platforms, inventory management, payment gateways, and AR product previews.",
    projects: 10,
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description:
      "Patient portals, telemedicine apps, HIPAA-compliant dashboards, appointment scheduling, and health analytics.",
    projects: 4,
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "Learning management systems, online course platforms, student dashboards, and interactive content delivery.",
    projects: 3,
  },
  {
    icon: Landmark,
    title: "Finance & Fintech",
    description:
      "Payment processing, subscription billing, financial dashboards, KYC integrations, and regulatory compliance.",
    projects: 3,
  },
  {
    icon: Factory,
    title: "SaaS & Enterprise",
    description:
      "Multi-tenant architectures, admin dashboards, analytics platforms, workflow automation, and API ecosystems.",
    projects: 6,
  },
]

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-28">
      <div className="absolute left-0 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across verticals that lets us hit the ground running on your project."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/30 bg-card p-6 transition-all duration-700 hover:border-primary/30",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {industry.projects} projects
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/5 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            )
          })}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
          >
            Have a project in mind? Let&apos;s talk
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
