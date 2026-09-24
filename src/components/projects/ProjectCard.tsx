import { ArrowUpRight, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import { GitHubIcon } from "@/components/icons/BrandIcons"
import type { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPrivate = project.private || project.type === "professional"

  return (
    <Card className="overflow-hidden border-border/60 bg-card/60 transition-colors hover:border-primary/40">
      <div className="aspect-video overflow-hidden border-b border-border/60 bg-muted/30">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="size-full object-cover"
        />
      </div>

      <CardHeader className="gap-3">
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
        <CardTitle className="text-xl">
          <Link
            to={`/projetos/${project.slug}`}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm">
          <Link to={`/projetos/${project.slug}`}>Detalhes</Link>
        </Button>

        {!isPrivate && project.github ? (
          <Button asChild variant="ghost" size="sm">
            <a href={project.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </Button>
        ) : null}

        {!isPrivate && project.demo ? (
          <Button asChild variant="ghost" size="sm">
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  )
}
