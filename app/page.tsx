import { Hero } from "@/components/home/hero"
import { StatsBar } from "@/components/home/stats-bar"
import { ServicesSection } from "@/components/home/services-section"
import { TravelSection } from "@/components/home/travel-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <TravelSection />
      <PricingSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
