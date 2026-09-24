import { ArrowUpRight, Lock } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { GitHubIcon } from "@/components/icons/BrandIcons"
import { getProjectBySlug } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold">Projeto não encontrado</h1>
          <p className="mt-3 text-muted-foreground">
            O slug informado não corresponde a nenhum projeto.
          </p>
          <Button asChild className="mt-6" variant="outline">
            <Link to="/projetos">Voltar aos projetos</Link>
          </Button>
        </div>
      </section>
    )
  }

  const isPrivate = project.private || project.type === "professional"

  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link to="/projetos">← Projetos</Link>
        </Button>

        <div className="flex flex-wrap gap-2">
          {project.type === "professional" ? (
            <Badge variant="secondary">Projeto profissional</Badge>
          ) : (
            <Badge variant="outline">Projeto pessoal</Badge>
          )}
          {isPrivate ? (
            <Badge variant="outline" className="gap-1">
              <Lock className="size-3" />
              Código privado
            </Badge>
          ) : null}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        {project.role ? (
          <p className="mt-2 text-sm text-primary">{project.role}</p>
        ) : null}
        <p className="mt-4 max-w-3xl text-muted-foreground">
          {project.longDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {!isPrivate && project.github ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
          ) : null}
          {!isPrivate && project.demo ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          ) : null}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border/60">
          <img
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <section>
            <h2 className="text-lg font-medium">Funcionalidades</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-medium">Desafios</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-medium">Aprendizados</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {project.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
