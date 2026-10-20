import { Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons"

export function Contact() {
  return (
    <section className="px-6 py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Contato
        </h2>

        <div className="mt-8 flex items-center gap-4">
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
        </div>
      </div>
    </section>
  )
}
