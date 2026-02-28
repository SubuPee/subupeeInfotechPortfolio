"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react"

const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/services/full-stack-development", label: "Full Stack Dev" },
  { href: "/services/api-integration", label: "API Integration" },
  { href: "/services/payment-integration", label: "Payment Solutions" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30 shadow-[0_-1px_3px_rgba(0,0,0,0.04)]">
      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block text-xl font-bold">
              <span className="gradient-text">Subupee</span>
              <span className="text-foreground"> Infotech</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A tech agency delivering scalable web applications and exceptional
              digital experiences for businesses worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Have a project in mind? Let{"'"}s build something amazing
              together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
              >
                Start a Project
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-3 border-t border-border/20 pt-8 text-sm text-muted-foreground md:flex-row md:justify-between"
        >
          <p>2026 Subupee Infotech. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-primary" /> precision
            and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
