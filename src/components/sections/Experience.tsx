import { experiences } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <section className="px-6 py-20" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="experience-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Experiência
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Itens fictícios apenas para validar a interface. Substitua pelos seus
          dados reais depois.
        </p>

        <div className="mt-10 space-y-4">
          {experiences.map((item) => (
            <Card key={item.id} className="border-border/60 bg-card/60">
              <CardHeader className="gap-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-primary">{item.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
