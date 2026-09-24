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

export interface Skill {
  name: string
  category: "frontend" | "backend" | "tools" | "other"
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}
