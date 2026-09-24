import { Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">Portfólio</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Desenvolvedor Full Stack — dados de demonstração
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:contato@exemplo.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Enviar e-mail"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <Link
            to="/contato"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  )
}
