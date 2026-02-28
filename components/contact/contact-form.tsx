"use client"

import { useRef, useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

function FloatingInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string
  id: string
  type?: string
  value: string
  onChange: (val: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const isActive = focused || value.length > 0

  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 transition-all duration-300",
          isActive
            ? "top-2 text-xs font-medium text-primary"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        )}
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={cn(
          "w-full rounded-xl border bg-card px-4 pb-3 pt-6 text-sm text-foreground outline-none transition-all duration-300",
          focused
            ? "border-primary/50 ring-1 ring-primary/20"
            : "border-border/30 hover:border-border"
        )}
      />
    </div>
  )
}

function FloatingTextarea({
  label,
  id,
  value,
  onChange,
  required,
}: {
  label: string
  id: string
  value: string
  onChange: (val: string) => void
  required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const isActive = focused || value.length > 0

  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 transition-all duration-300",
          isActive
            ? "top-2 text-xs font-medium text-primary"
            : "top-4 text-sm text-muted-foreground"
        )}
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={5}
        className={cn(
          "w-full resize-none rounded-xl border bg-card px-4 pb-3 pt-6 text-sm text-foreground outline-none transition-all duration-300",
          focused
            ? "border-primary/50 ring-1 ring-primary/20"
            : "border-border/30 hover:border-border"
        )}
      />
    </div>
  )
}

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border/30 bg-card p-8 shadow-lg shadow-primary/5"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">Send a Message</h2>

        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <FloatingInput
              label="Your Name"
              id="name"
              value={form.name}
              onChange={(val) => setForm({ ...form, name: val })}
              required
            />
            <FloatingInput
              label="Your Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(val) => setForm({ ...form, email: val })}
              required
            />
          </div>
          <FloatingInput
            label="Subject"
            id="subject"
            value={form.subject}
            onChange={(val) => setForm({ ...form, subject: val })}
            required
          />
          <FloatingTextarea
            label="Your Message"
            id="message"
            value={form.message}
            onChange={(val) => setForm({ ...form, message: val })}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={cn(
            "mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-semibold transition-all duration-300",
            isSubmitted
              ? "bg-success/20 text-success"
              : "bg-primary text-primary-foreground hover:glow-primary"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle2 size={18} />
              Message Sent!
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
