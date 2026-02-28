"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, TravelFlow Inc.",
    avatar: "SM",
    rating: 5,
    text: "Exceptional work on our real-time flight booking platform. The system handles thousands of concurrent users seamlessly. The attention to performance and UX was world-class.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "James Rodriguez",
    role: "Founder, NexaCommerce",
    avatar: "JR",
    rating: 5,
    text: "The e-commerce platform exceeded every expectation. Our conversion rate jumped 35% within the first month. The AR product previews were a game-changer for our customers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Chen",
    role: "Product Lead, HealthSync",
    avatar: "EC",
    rating: 5,
    text: "Our healthcare dashboard went from concept to production in record time. The real-time analytics and predictive features have genuinely improved patient outcomes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Park",
    role: "CEO, Wanderlust Travels",
    avatar: "MP",
    rating: 5,
    text: "The complete travel booking ecosystem was built with incredible precision. Dynamic pricing, multi-vendor support, and a dashboard our agents actually love using.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering, ScaleUp",
    avatar: "PS",
    rating: 5,
    text: "The design system created for our organization unified 5 product teams and cut our UI development time by 60%. The documentation and accessibility standards were impeccable.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={cn(
            "transition-colors",
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted",
          )}
        />
      ))}
    </div>
  )
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    rotateY: direction > 0 ? 15 : -15,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    rotateY: direction < 0 ? 15 : -15,
    filter: "blur(4px)",
  }),
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const t = testimonials[current]

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Trusted by founders, CTOs, and product leaders to deliver exceptional software solutions."
        />

        <ScrollReveal variant="fade-up">
          <div
            className="relative mx-auto max-w-4xl"
            style={{ perspective: "1200px" }}
          >
            {/* Main testimonial card */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[var(--card-shadow)] p-8 backdrop-blur-sm md:p-12">
              {/* Quote icon */}
              <div className="absolute right-8 top-8 text-primary/5">
                <Quote size={80} />
              </div>

              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success" />

              <div className="relative min-h-[220px]" style={{ transformStyle: "preserve-3d" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <StarRating rating={t.rating} />

                    <blockquote className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      {/* Real avatar image */}
                      <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1)
                        setCurrent(i)
                        setIsAutoPlaying(false)
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        i === current
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40",
                      )}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { prev(); setIsAutoPlaying(false) }}
                    className="rounded-lg border border-border/50 bg-card p-2 text-muted-foreground shadow-[var(--card-shadow)] transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { next(); setIsAutoPlaying(false) }}
                    className="rounded-lg border border-border/50 bg-card p-2 text-muted-foreground shadow-[var(--card-shadow)] transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
