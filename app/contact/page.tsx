import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch - I'm always open to discussing new projects, creative ideas, or opportunities.",
}

export default function ContactPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
