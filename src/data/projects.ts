import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "1",
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "Aplicação de gerenciamento de tarefas com drag-and-drop e filtros avançados.",
    longDescription:
      "TaskFlow é um projeto pessoal de demonstração focado em organização de tarefas. Inclui autenticação simulada, board kanban e filtros por status e prioridade.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/images/project-placeholder.svg",
    type: "personal",
    featured: true,
    github: "https://github.com/example/taskflow",
    demo: "https://example.com/taskflow",
    private: false,
    role: "Desenvolvedor Full Stack",
    features: [
      "Board kanban com drag-and-drop",
      "Filtros por status e prioridade",
      "Persistência local de dados",
    ],
    challenges: [
      "Manter o estado sincronizado durante o drag-and-drop",
      "Organizar componentes reutilizáveis sem overengineering",
    ],
    learnings: [
      "Composição de componentes em React",
      "Tipagem de props e estado com TypeScript",
    ],
  },
  {
    id: "2",
    slug: "devnotes",
    title: "DevNotes",
    description:
      "Editor de anotações técnicas com Markdown e busca rápida.",
    longDescription:
      "DevNotes é um projeto pessoal de demonstração para anotações de estudos. Suporta Markdown, tags e busca por título e conteúdo.",
    technologies: ["React", "TypeScript", "React Router"],
    image: "/images/project-placeholder.svg",
    type: "personal",
    featured: true,
    github: "https://github.com/example/devnotes",
    demo: "https://example.com/devnotes",
    private: false,
    role: "Desenvolvedor Frontend",
    features: [
      "Edição em Markdown",
      "Sistema de tags",
      "Busca em tempo real",
    ],
    challenges: [
      "Renderização segura de Markdown",
      "Performance da busca com muitas notas",
    ],
    learnings: [
      "Roteamento com React Router",
      "Debounce em campos de busca",
    ],
  },
  {
    id: "3",
    slug: "portal-interno-demo",
    title: "Portal Interno (Demo)",
    description:
      "Case profissional fictício de um portal interno para gestão de processos.",
    longDescription:
      "Case de demonstração de um projeto profissional privado. O código e a aplicação não estão públicos. A apresentação usa screenshots autorizados e descrição técnica.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/project-placeholder.svg",
    type: "professional",
    featured: true,
    private: true,
    role: "Desenvolvedor Full Stack",
    features: [
      "Dashboard com métricas internas",
      "Fluxos de aprovação",
      "Controle de permissões por perfil",
    ],
    challenges: [
      "Modelar permissões sem expor dados sensíveis",
      "Integrar múltiplos módulos legados",
    ],
    learnings: [
      "Comunicação com stakeholders técnicos",
      "Documentação de decisões de arquitetura",
    ],
  },
  {
    id: "4",
    slug: "checkout-b2b-demo",
    title: "Checkout B2B (Demo)",
    description:
      "Case profissional fictício de um fluxo de checkout B2B com regras complexas.",
    longDescription:
      "Case de demonstração focado em regras de negócio, validação de pedidos e integração com APIs internas. Código e demo não disponíveis publicamente.",
    technologies: ["React", "TypeScript", "REST APIs"],
    image: "/images/project-placeholder.svg",
    type: "professional",
    featured: false,
    private: true,
    role: "Desenvolvedor Frontend",
    features: [
      "Validação de pedidos em múltiplas etapas",
      "Cálculo dinâmico de condições comerciais",
      "Feedback visual de erros e estados de loading",
    ],
    challenges: [
      "Manter UX clara com regras de negócio densas",
      "Sincronizar formulários grandes com respostas da API",
    ],
    learnings: [
      "Modelagem de formulários complexos",
      "Separação entre UI e regras de domínio",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
