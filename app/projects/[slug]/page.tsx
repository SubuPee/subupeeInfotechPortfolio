import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "@/lib/data"
import { ProjectDetailContent } from "@/components/projects/project-detail-content"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <ProjectDetailContent
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}
