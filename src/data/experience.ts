import type { ExperienceItem } from "@/types"

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    role: "Estagiário de Desenvolvimento de Software",
    kind: "principal",
    period: "10 meses",
    details: [
      "Tecnologias utilizadas no desenvolvimento.",
      "Sistemas e funcionalidades em que trabalhou.",
      "Participação em correções, melhorias e implementação de funcionalidades.",
      "Conhecimentos técnicos adquiridos.",
    ],
  },
  {
    id: "2",
    role: "Suporte Técnico de TI",
    kind: "complementar",
    period: "aproximadamente 1 ano e alguns meses",
    details: [
      "Manutenção e diagnóstico de computadores.",
      "Instalação e configuração de softwares.",
      "Atendimento e resolução de problemas técnicos.",
      "Suporte aos usuários.",
    ],
  },
]
