import type { ExperienceItem } from "@/types"

/** Dados fictícios apenas para desenvolver a UI. Não representam experiência real. */
export const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "Empresa Demo Alpha",
    role: "Desenvolvedor Full Stack",
    period: "2024 — Atual",
    description:
      "Participação fictícia em produtos web internos, com foco em interfaces React e APIs REST.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "2",
    company: "Empresa Demo Beta",
    role: "Desenvolvedor Frontend",
    period: "2022 — 2024",
    description:
      "Experiência fictícia em construção de interfaces responsivas e componentes reutilizáveis.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
  },
]
