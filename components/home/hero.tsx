"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

const roles = [
  "Full Stack Development",
  "UI/UX Design Agency",
  "API Integration Experts",
  "Payment Solutions",
]

function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

function FloatingShape3D({
  className,
  delay = 0,
  duration = 20,
  depth = 0,
}: {
  className: string
  delay?: number
  duration?: number
  depth?: number
}) {
  return (
    <motion.div
      className={className}
      style={{ transform: `translateZ(${depth}px)` }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Multi-layer parallax with different speeds for 3D depth
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yLayer3 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92])
  const springY2 = useSpring(yLayer2, { stiffness: 100, damping: 30 })
  const springY3 = useSpring(yLayer3, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Parallax Layer 1 - Background image (deepest) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yLayer1 }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-background/70 dark:bg-background/60" />
      </motion.div>

      {/* Parallax Layer 2 - Gradient blobs (mid depth) */}
      <motion.div className="absolute inset-0 z-[1]" style={{ y: springY2 }}>
        <motion.div
          className="absolute left-[10%] top-[15%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] top-[25%] h-[500px] w-[500px] rounded-full bg-accent/8 blur-[150px]"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[35%] h-[400px] w-[400px] rounded-full bg-success/6 blur-[150px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </motion.div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--glow-primary-25) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Parallax Layer 3 - 3D Floating shapes (closest) */}
      <motion.div
        className="absolute inset-0 z-[3] preserve-3d"
        style={{ y: springY3, perspective: "800px" }}
      >
        <FloatingShape3D
          className="absolute left-[12%] top-[20%] h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
          delay={0}
          duration={15}
          depth={40}
        />
        <FloatingShape3D
          className="absolute right-[15%] top-[15%] h-12 w-12 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm"
          delay={3}
          duration={18}
          depth={60}
        />
        <FloatingShape3D
          className="absolute left-[20%] bottom-[25%] h-10 w-10 rotate-45 border border-success/20 bg-success/5 backdrop-blur-sm"
          delay={6}
          duration={22}
          depth={30}
        />
        <FloatingShape3D
          className="absolute right-[10%] bottom-[30%] h-14 w-14 rounded-xl border border-primary/15 bg-primary/5 backdrop-blur-sm"
          delay={2}
          duration={16}
          depth={50}
        />
        <FloatingShape3D
          className="absolute left-[50%] top-[10%] h-8 w-8 rounded-full border border-accent/15 bg-accent/5 backdrop-blur-sm"
          delay={5}
          duration={20}
          depth={70}
        />
        {/* Extra 3D floating geometric shapes */}
        <motion.div
          className="absolute left-[8%] top-[50%] h-6 w-6 border border-primary/20"
          style={{ transform: "translateZ(80px) rotateZ(45deg)" }}
          animate={{ rotateZ: [45, 405], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[60%] h-4 w-4 rounded-full bg-accent/20"
          style={{ transform: "translateZ(90px)" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hero content (foreground) */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-medium text-primary backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Main heading with split text reveal */}
        <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          <span className="block overflow-hidden">
            <SplitText text="We Build" className="text-foreground" delay={0.4} />
          </span>
          <span className="block overflow-hidden">
            <SplitText text="Digital" className="gradient-text text-glow" delay={0.7} />{" "}
            <SplitText text="Experiences" className="gradient-text text-glow-accent" delay={0.9} />
          </span>
        </h1>

        {/* Typewriter */}
        <motion.div
          className="mt-8 flex h-12 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <span className="font-mono text-xl text-muted-foreground md:text-2xl">
            {displayText}
            <motion.span
              className="ml-0.5 inline-block w-[3px] rounded-full bg-primary"
              style={{ height: "1.2em" }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          A premium tech agency with{" "}
          <span className="font-semibold text-primary">4+ years</span> of experience and an{" "}
          <span className="font-semibold text-accent">8-member expert team</span>{" "}
          delivering cinematic-quality web applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton
            href="/projects"
            className="bg-primary text-primary-foreground hover:glow-primary"
          >
            View Projects
            <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton
            href="/contact"
            className="border border-border text-foreground hover:border-primary/50 hover:text-primary"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* 3D Floating Tech pills */}
        <motion.div
          className="mx-auto mt-16 flex max-w-lg flex-wrap items-center justify-center gap-3"
          style={{ perspective: "600px" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 2.0 },
            },
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript", "AWS"].map((tech, i) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10, rotateX: -30 },
                visible: { opacity: 1, scale: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 20,
                transition: { duration: 0.2 },
              }}
              className="rounded-lg border border-border/50 bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${(i % 3) * 10}px)`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-primary"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
