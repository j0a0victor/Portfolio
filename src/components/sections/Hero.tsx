import { ArrowRight, Code2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.45_0.14_250_/_0.25),_transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-primary">
          <Code2 className="size-4" />
          Desenvolvedor Full Stack
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Construindo interfaces modernas com foco em clareza e qualidade
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Portfólio em construção para apresentar projetos pessoais, cases
          profissionais e o caminho de aprendizado em React e TypeScript.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/projetos">
              Ver projetos
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contato">Entrar em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
