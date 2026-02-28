"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import {
  Plane,
  Hotel,
  Map,
  TrendingUp,
  LayoutDashboard,
  Store,
  ArrowRight,
  Shield,
} from "lucide-react"

const travelFeatures = [
  {
    icon: Plane,
    title: "Real-time Flight Booking",
    description:
      "Live flight search with intelligent pricing, seat selection, and instant confirmation integrated with GDS systems.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking Platform",
    description:
      "Complete accommodation booking with availability calendars, room management, and channel manager integration.",
  },
  {
    icon: Map,
    title: "Tour Package Management",
    description:
      "Dynamic itinerary builder with multi-destination support, day-by-day planning, and automated costing engine.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing Engine",
    description:
      "AI-driven pricing algorithms that adjust rates based on demand, seasonality, and competitor analysis in real-time.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Full-featured dashboard for travel agencies with booking analytics, agent management, and financial reporting.",
  },
  {
    icon: Store,
    title: "Multi-vendor System",
    description:
      "Marketplace architecture supporting multiple suppliers with unified search, booking flow, and settlement processing.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof travelFeatures)[0]
  index: number
}) {
  const IconComponent = feature.icon

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative flex h-full flex-col rounded-xl border border-border/50 bg-card shadow-[var(--card-shadow)] p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-[var(--card-shadow-hover)]"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
          <IconComponent size={22} />
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-black/5 dark:shadow-primary/5">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-border/20 px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-secondary/80 py-1 px-3">
            <span className="text-xs text-muted-foreground">
              traveldash.app/admin/bookings
            </span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Stats row */}
          <div className="mb-4 grid grid-cols-4 gap-3">
            {[
              {
                label: "Bookings Today",
                value: "142",
                change: "+12%",
                color: "text-primary",
              },
              {
                label: "Revenue",
                value: "$28.5K",
                change: "+8.3%",
                color: "text-success",
              },
              {
                label: "Active Flights",
                value: "67",
                change: "+5%",
                color: "text-accent",
              },
              {
                label: "Occupancy",
                value: "89%",
                change: "+2.1%",
                color: "text-success",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border/20 bg-secondary/40 p-3"
              >
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  {stat.value}
                </p>
                <p className={cn("text-xs", stat.color)}>{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="flex gap-3">
            <div className="flex-1 rounded-lg border border-border/20 bg-secondary/30 p-4">
              <p className="mb-3 text-xs font-semibold text-muted-foreground">
                Revenue This Week
              </p>
              <div className="flex h-24 items-end gap-2">
                {[45, 70, 55, 80, 65, 90, 75].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary/80"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="w-44 rounded-lg border border-border/20 bg-secondary/30 p-4">
              <p className="mb-3 text-xs font-semibold text-muted-foreground">
                Top Routes
              </p>
              <div className="space-y-2.5">
                {[
                  { route: "NYC - LAX", pct: 32, color: "bg-primary" },
                  { route: "LON - PAR", pct: 24, color: "bg-accent" },
                  { route: "DXB - SIN", pct: 18, color: "bg-success" },
                  { route: "SFO - TYO", pct: 14, color: "bg-primary" },
                ].map((r) => (
                  <div key={r.route}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{r.route}</span>
                      <span className="text-foreground">{r.pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-secondary">
                      <motion.div
                        className={cn("h-full rounded-full", r.color)}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.pct * 2.5}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TravelSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Niche Expertise"
          title="Complete Travel & Booking Platform Solutions"
          description="Enterprise-level travel tech solutions from real-time flight booking to multi-vendor marketplace systems."
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-semibold text-accent backdrop-blur-sm">
            <Shield size={16} />
            End-to-End Travel Tech Solutions
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <div className="mb-16">
          <DashboardMockup />
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, gap: "0.75rem" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all duration-300 hover:glow-accent"
          >
            Discuss Your Travel Project
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
