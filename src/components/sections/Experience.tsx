import { experiences } from "@/data/experience"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ExperienceKind } from "@/types"

const kinds: Record<
  ExperienceKind,
  { label: string; badgeClassName: string; cardClassName: string }
> = {
  principal: {
    label: "Experiência principal",
    badgeClassName: "bg-green-500/15 text-green-500",
    cardClassName: "bg-card/80 ring-green-500/30",
  },
  complementar: {
    label: "Experiência complementar",
    badgeClassName: "bg-secondary text-secondary-foreground",
    cardClassName: "border-border/60 bg-card/60",
  },
}

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

        <div className="mt-10 space-y-4">
          {experiences.map((item) => {
            const kind = kinds[item.kind]

            return (
              <Card key={item.id} className={kind.cardClassName}>
                <CardHeader className="gap-3">
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <Badge
                    className={cn("font-semibold", kind.badgeClassName)}
                  >
                    {kind.label}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>{`Período: ${item.period}.`}</li>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
