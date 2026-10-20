import { Network } from "lucide-react"
import {
  siCss,
  siDjango,
  siGit,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from "simple-icons"
import type { Skill, SkillIcon } from "@/types"

/**
 * Logo de marca (simple-icons). Por padrão usa a cor oficial; passe `color`
 * quando ela tiver pouco contraste com o fundo escuro do site.
 */
function brand(icon: SimpleIcon, color = `#${icon.hex}`): SkillIcon {
  return { type: "brand", path: icon.path, color }
}

export const skills: Skill[] = [
  { name: "React", category: "frontend", icon: brand(siReact) },
  { name: "TypeScript", category: "frontend", icon: brand(siTypescript) },
  { name: "JavaScript", category: "frontend", icon: brand(siJavascript) },
  { name: "HTML", category: "frontend", icon: brand(siHtml5) },
  { name: "CSS", category: "frontend", icon: brand(siCss, "#9966CC") },
  { name: "Tailwind CSS", category: "frontend", icon: brand(siTailwindcss) },

  { name: "Node.js", category: "backend", icon: brand(siNodedotjs) },
  { name: "Python", category: "backend", icon: brand(siPython) },
  { name: "Django", category: "backend", icon: brand(siDjango, "#44B78B") },
  { name: "PostgreSQL", category: "backend", icon: brand(siPostgresql) },
  {
    name: "REST APIs",
    category: "backend",
    icon: { type: "lucide", icon: Network },
  },

  { name: "Git", category: "tools", icon: brand(siGit) },
  { name: "Vite", category: "tools", icon: brand(siVite) },
]
