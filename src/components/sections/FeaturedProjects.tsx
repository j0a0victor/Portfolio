import { Link } from "react-router-dom"
import { getFeaturedProjects } from "@/data/projects"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { Button } from "@/components/ui/button"

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="px-6 py-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="projects-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Projetos em destaque
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Projetos fictícios para desenvolver a UI, incluindo cases com
              código privado.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/projetos">Ver todos</Link>
          </Button>
        </div>

        <ProjectGrid projects={featured} />
      </div>
    </section>
  )
}
