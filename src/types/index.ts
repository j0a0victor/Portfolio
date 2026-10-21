import type { LucideIcon } from "lucide-react"

export type ProjectType = "personal" | "professional"

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  type: ProjectType
  featured: boolean
  github?: string
  demo?: string
  private: boolean
  role?: string
  features: string[]
  challenges: string[]
  learnings: string[]
}

export type SkillIcon =
  | { type: "brand"; path: string; color: string }
  | { type: "lucide"; icon: LucideIcon }

export interface Skill {
  name: string
  category: "frontend" | "backend" | "tools" | "other"
  icon: SkillIcon
}

export type ExperienceKind = "principal" | "complementar"

export interface ExperienceItem {
  id: string
  role: string
  kind: ExperienceKind
  period: string
  details: string[]
}
