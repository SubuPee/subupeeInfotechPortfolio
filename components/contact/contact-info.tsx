"use client"

import { useRef } from "react"
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@alexchen.dev" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Clock, label: "Availability", value: "Open to new opportunities" },
]

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <div ref={ref}>
      <div
        className={cn(
          "transition-all duration-700",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          Contact
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s Build Something
          <span className="gradient-text"> Amazing</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          I&apos;m always excited to discuss new projects, creative ideas, or
          opportunities to be part of your vision. Drop me a message and I&apos;ll
          get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {contactDetails.map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-4 rounded-xl border border-border/30 bg-card p-4 transition-all duration-700 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            )}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon size={18} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p
          className={cn(
            "mb-4 text-sm font-medium text-muted-foreground transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          Find me on social media
        </p>
        <div className="flex gap-3">
          {socials.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={cn(
                "group flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 text-muted-foreground transition-all duration-700 hover:border-primary/50 hover:text-primary hover:glow-primary",
                isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${600 + i * 80}ms` }}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
