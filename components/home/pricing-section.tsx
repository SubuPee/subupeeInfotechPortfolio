"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { CheckCircle2, ArrowRight, Star, Sparkles, Crown } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    icon: Star,
    tagline: "Perfect for small businesses",
    price: { project: "$1,499", monthly: "$299" },
    features: [
      "Basic UI/UX design",
      "Up to 5-page responsive website",
      "Basic API integration",
      "Mobile responsive design",
      "2 revision rounds",
      "2-week delivery",
    ],
    popular: false,
    accentColor: "primary",
  },
  {
    name: "Professional",
    icon: Sparkles,
    tagline: "Most popular for growing teams",
    price: { project: "$4,999", monthly: "$899" },
    features: [
      "Premium UI/UX design",
      "Full stack web application",
      "Advanced API integrations",
      "Payment gateway integration",
      "Admin dashboard included",
      "SEO optimization",
      "5 revision rounds",
      "4-week delivery",
    ],
    popular: true,
    accentColor: "primary",
  },
  {
    name: "Enterprise",
    icon: Crown,
    tagline: "For travel tech & complex platforms",
    price: { project: "Custom", monthly: "Custom" },
    features: [
      "Real-time flight booking system",
      "Hotel booking platform",
      "Custom admin dashboard",
      "Payment gateway integration",
      "Full backend system",
      "Multi-vendor architecture",
      "Ongoing support & maintenance",
      "Dedicated project manager",
    ],
    popular: false,
    accentColor: "accent",
  },
]

function PricingCard({
  plan,
  index,
  billingMode,
}: {
  plan: (typeof pricingPlans)[0]
  index: number
  billingMode: "project" | "monthly"
}) {
  const IconComponent = plan.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10, x: index === 0 ? -30 : index === 2 ? 30 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: "800px" }}
    >
      <motion.div
        whileHover={{ y: -8, rotateY: 2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-[var(--card-shadow)] transition-all duration-500 hover:shadow-[var(--card-shadow-hover)]",
          plan.popular
            ? "border-primary/50 bg-card glow-primary scale-[1.02]"
            : "border-border/50 bg-card backdrop-blur-sm hover:border-primary/30",
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Popular badge */}
        {plan.popular && (
          <div className="bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-center text-xs font-bold text-primary-foreground">
            Most Popular
          </div>
        )}

        <div className="p-8">
          {/* Icon & Name */}
          <div className="mb-6">
            <div
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500",
                plan.popular
                  ? "bg-primary/20 text-primary"
                  : plan.accentColor === "accent"
                    ? "bg-accent/10 text-accent group-hover:bg-accent/20"
                    : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
              )}
            >
              <IconComponent size={24} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {plan.tagline}
            </p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span
                className={cn(
                  "text-4xl font-bold",
                  plan.popular ? "gradient-text" : "text-foreground",
                )}
              >
                {plan.price[billingMode]}
              </span>
              {plan.price[billingMode] !== "Custom" && (
                <span className="text-sm text-muted-foreground">
                  /{billingMode === "monthly" ? "mo" : "project"}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="mb-8 flex-1 space-y-3">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  size={16}
                  className={cn(
                    "mt-0.5 shrink-0",
                    plan.popular ? "text-primary" : "text-success",
                  )}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold transition-all duration-300",
              plan.popular
                ? "bg-primary text-primary-foreground hover:glow-primary"
                : "border border-border text-foreground hover:border-primary/50 hover:text-primary",
            )}
          >
            {plan.price[billingMode] === "Custom"
              ? "Book Consultation"
              : "Get Started"}
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Background glow for popular */}
        {plan.popular && (
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
        )}
      </motion.div>
    </motion.div>
  )
}

export function PricingSection() {
  const [billingMode, setBillingMode] = useState<"project" | "monthly">(
    "project",
  )

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Pricing"
          title="Transparent Pricing"
          description="Flexible plans tailored to your project scope. Every package includes premium quality and dedicated support."
        />

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 flex items-center justify-center"
        >
          <div className="inline-flex items-center rounded-xl border border-border/30 bg-card p-1">
            <button
              onClick={() => setBillingMode("project")}
              className={cn(
                "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                billingMode === "project"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Per Project
            </button>
            <button
              onClick={() => setBillingMode("monthly")}
              className={cn(
                "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                billingMode === "monthly"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Monthly Retainer
            </button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={i}
              billingMode={billingMode}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
