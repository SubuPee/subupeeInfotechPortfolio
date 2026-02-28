import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { serviceDetails } from "@/lib/data"
import { ServiceDetailContent } from "@/components/services/service-detail-content"

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = serviceDetails.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | Subupee Infotech`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceDetails.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const currentIndex = serviceDetails.findIndex((s) => s.slug === slug)
  const prevService = currentIndex > 0 ? serviceDetails[currentIndex - 1] : null
  const nextService =
    currentIndex < serviceDetails.length - 1 ? serviceDetails[currentIndex + 1] : null

  return (
    <ServiceDetailContent
      service={service}
      prevService={prevService}
      nextService={nextService}
    />
  )
}
