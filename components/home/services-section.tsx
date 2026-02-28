"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import {
  Palette,
  Code2,
  Plug,
  CreditCard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Premium Design",
    description:
      "Crafting modern, conversion-focused interfaces with meticulous attention to user experience and visual polish.",
    features: [
      "Modern product design",
      "Wireframing & prototyping",
      "Design systems",
      "Conversion-focused interfaces",
    ],
    colorClass: "primary" as const,
  },
  {
    slug: "full-stack-development",
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building high-performance, scalable applications from front-end to back-end with industry-leading frameworks.",
    features: [
      "React / Next.js frontend",
      "Node / Java backend",
      "Scalable architecture",
      "High-performance apps",
    ],
    colorClass: "accent" as const,
  },
  {
    slug: "api-integration",
    icon: Plug,
    title: "API Integration",
    description:
      "Seamlessly connecting systems through third-party APIs and building robust automation workflows.",
    features: [
      "Third-party APIs",
      "REST & GraphQL",
      "CRM & SaaS integrations",
      "Automation workflows",
    ],
    colorClass: "success" as const,
  },
  {
    slug: "payment-integration",
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Implementing secure, reliable payment solutions with support for subscriptions and multi-currency transactions.",
    features: [
      "Razorpay / Stripe integration",
      "Secure checkout systems",
      "Subscription billing",
      "Multi-currency support",
    ],
    colorClass: "primary" as const,
  },
]

const colorMap = {
  primary: {
    iconBg: "bg-primary/10 text-primary group-hover:bg-primary/20",
    check: "text-primary",
    link: "text-primary",
    border: "border-primary/40 glow-primary",
    glow: "bg-primary/10",
  },
  accent: {
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent/20",
    check: "text-accent",
    link: "text-accent",
    border: "border-accent/40 glow-accent",
    glow: "bg-accent/10",
  },
  success: {
    iconBg: "bg-success/10 text-success group-hover:bg-success/20",
    check: "text-success",
    link: "text-success",
    border: "border-success/40 glow-success",
    glow: "bg-success/10",
  },
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const IconComponent = service.icon
  const colors = colorMap[service.colorClass]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollReveal
      variant={index % 2 === 0 ? "fade-up" : "zoom-in"}
      delay={index * 0.1}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02, rotateY: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-primary/30 hover:shadow-[var(--card-shadow-hover)]"
        style={{ transformStyle: "preserve-3d", perspective: "800px" }}
      >
        {/* Number badge */}
        <span className="absolute right-6 top-6 font-mono text-5xl font-bold text-muted/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* 3D Rotating Icon on hover */}
        <div
          className={cn(
            "mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500",
            colors.iconBg,
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <IconComponent size={28} />
          </motion.div>
        </div>

        <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="mb-8 flex-1 space-y-3">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <CheckCircle2 size={14} className={cn("shrink-0", colors.check)} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* View Details */}
        <Link
          href={`/services/${service.slug}`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3",
            colors.link,
          )}
        >
          View Details
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Background glow on hover */}
        <div
          className={cn(
            "pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-[80px] transition-opacity duration-500",
            colors.glow,
            "opacity-0 group-hover:opacity-100",
          )}
        />
      </motion.div>
    </ScrollReveal>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Core Offerings"
          title="Services We Provide"
          description="End-to-end software solutions from concept to deployment, built with precision and scalable architecture."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
