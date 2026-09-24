import { projects } from "@/data/projects"
import { ProjectGrid } from "@/components/projects/ProjectGrid"

export function ProjectsPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Projetos
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Lista completa de projetos pessoais e cases profissionais de
          demonstração.
        </p>

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  )
}
