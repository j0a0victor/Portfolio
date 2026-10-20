import { skills } from "@/data/skills"
import { SkillLogo } from "@/components/icons/SkillLogo"

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Ferramentas" },
  { key: "other", label: "Outros" },
] as const

export function Skills() {
  return (
    <section className="px-6 py-20" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Tecnologias
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Ferramentas e linguagens que utilizo no dia a dia de desenvolvimento.
        </p>

        <div className="mt-10 space-y-8">
          {categories.map((category) => {
            const items = skills.filter(
              (skill) => skill.category === category.key
            )

            if (items.length === 0) return null

            return (
              <div key={category.key}>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                  {category.label}
                </h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-3 py-5 text-center"
                    >
                      <SkillLogo icon={skill.icon} className="size-9" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
