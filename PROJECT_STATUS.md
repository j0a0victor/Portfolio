# PROJECT_STATUS

Última atualização: 20/10/2026. Resumo do estado real do código, pensado para ser lido por outra IA sem reanalisar o projeto.

## Informações do projeto

- **Nome:** `portfolio` (package.json, v0.0.0, privado). Título da página: "Portfólio — Desenvolvedor Full Stack". Idioma da UI: pt-BR.
- **Objetivo:** SPA de portfólio pessoal para apresentar projetos pessoais, cases profissionais (código privado), experiência e tecnologias. Todo o conteúdo atual é de demonstração.
- **Stack:** React 19, TypeScript 6, Vite 8, Tailwind CSS 4 (`@tailwindcss/vite`), React Router DOM 7. Sem backend, sem API.
- **Bibliotecas principais:**
  - shadcn/ui (estilo `radix-nova`, base `neutral`) sobre `radix-ui`, `class-variance-authority`, `tw-animate-css` e `shadcn/tailwind.css`.
  - `lucide-react` (ícones de interface).
  - `simple-icons` (logos das tecnologias).
  - `@fontsource-variable/geist` (fonte).
  - `cn` (pacote npm usado como utilitário de classes).
  - `oxlint` (lint).
- **Scripts:** `dev` (vite), `build` (`tsc -b && vite build`), `lint` (oxlint), `preview`.
- **Repositório:** GitHub `j0a0victor/Portfolio`.

## Estrutura do projeto

| Caminho | Responsabilidade |
| --- | --- |
| `src/pages/` | Páginas roteadas: `Home`, `ProjectsPage`, `ProjectDetailPage`, `AboutPage`, `ContactPage`. |
| `src/components/layout/` | `MainLayout` (Navbar + `Outlet` + Footer) e `Footer`. |
| `src/components/navigation/` | `Navbar` (fixa no topo, com menu mobile). |
| `src/components/sections/` | Seções da home: `Hero`, `About`, `Experience`, `Skills`, `FeaturedProjects`, `Contact`. |
| `src/components/projects/` | `ProjectCard` e `ProjectGrid`. |
| `src/components/icons/` | `BrandIcons` (GitHub e LinkedIn em SVG inline) e `SkillLogo`. |
| `src/components/ui/` | Componentes shadcn: `badge`, `button`, `card`, `input`, `textarea`, `separator`. |
| `src/data/` | Dados estáticos tipados: `projects.ts`, `experience.ts`, `skills.ts`. |
| `src/types/index.ts` | Tipos `Project`, `Skill`, `SkillIcon`, `ExperienceItem`. |
| `src/lib/utils.ts` | Reexporta `cn`. |
| `public/` | `favicon.svg`, `images/project-placeholder.svg`. |

Arquivos importantes: `src/App.tsx` (rotas), `src/index.css` (tokens de tema e estilos base), `index.html` (`<html class="dark">`), `vite.config.ts` (alias `@` → `src`), `components.json` (shadcn), `.oxlintrc.json`.

## Páginas e funcionalidades

Status refere-se à UI/funcionalidade implementada. O conteúdo ainda é placeholder (ver Progresso).

| Nome | Rota | Status | Descrição |
| --- | --- | --- | --- |
| Home | `/` | Concluído | Ordem das seções: Hero, Sobre mim, Experiência, Tecnologias, Projetos em destaque, Contato. |
| Projetos | `/projetos` | Concluído | Grade com todos os projetos (4). |
| Detalhe do projeto | `/projetos/:slug` | Concluído | Badges de tipo e privacidade, descrição, tecnologias, botões GitHub/Demo (ocultos se privado), imagem e listas de Funcionalidades, Desafios e Aprendizados. Slug inválido mostra "Projeto não encontrado". |
| Sobre | `/sobre` | Concluído | Renderiza a seção `About` (sem botão "Saiba mais"). |
| Contato | `/contato` | Concluído | Renderiza a seção `Contact`: só ícones de e-mail, GitHub e LinkedIn com links. Sem formulário. |
| Rota desconhecida | `*` | Concluído | Redireciona para `/`. |
| Tecnologias | seção da home | Concluído | 13 tecnologias em Frontend (6), Backend (5: Node.js, Python, Django, PostgreSQL, REST APIs) e Ferramentas (2: Git, Vite). Cada cartão tem o logo acima do nome. |
| Experiência | seção da home | Concluído | Cartões a partir de `experience.ts` (2 itens fictícios). Não tem página própria. |

## Componentes principais

- **MainLayout:** estrutura comum das rotas (Navbar, conteúdo, Footer).
- **Navbar:** links Início, Projetos, Sobre e Contato (`NavLink` com estado ativo) e menu mobile controlado por estado.
- **Footer:** apenas texto ("Portfólio / Desenvolvedor Full Stack — dados de demonstração").
- **Seções (`sections/`):** cada uma é um bloco autocontido. `About` e `Contact` são reutilizadas na home e nas páginas `/sobre` e `/contato`.
- **ProjectGrid / ProjectCard:** grade de 2 colunas e cartão com imagem, badges, tecnologias e ações. `FeaturedProjects` e `ProjectsPage` usam o grid.
- **SkillLogo:** renderiza um `SkillIcon`, que pode ser logo de marca (path SVG + cor) ou ícone `lucide`.
- **BrandIcons:** `GitHubIcon` e `LinkedInIcon`.
- **ui/:** `badge`, `button` e `card` são usados. `input`, `textarea` e `separator` não são usados.

## Decisões técnicas

- Dados em arquivos estáticos tipados (`src/data`). Helpers `getProjectBySlug` e `getFeaturedProjects` em `projects.ts`.
- Rotas definidas em `App.tsx` com `BrowserRouter` e `MainLayout` como layout comum.
- Tema escuro fixo (`class="dark"` no `<html>`), com variáveis CSS em oklch. Existe um tema claro em `:root`, mas não há alternância.
- Alias `@/` → `src/` (Vite e tsconfig).
- Projeto do tipo `professional` é sempre tratado como privado: `project.private || type === "professional"` oculta GitHub/Demo.
- Logos via `simple-icons` com imports nomeados (tree-shaking). O helper `brand()` em `skills.ts` usa a cor oficial, com override de contraste no fundo escuro: CSS `#9966CC` e Django `#44B78B`. "REST APIs" usa o ícone `Network` do lucide, por não ter logo de marca.
- Decisões do usuário a preservar:
  - Ordem da home: Hero primeiro, depois Sobre mim e Experiência, e as demais seções na ordem original.
  - Contato sem formulário, apenas ícones. O footer não tem links de contato.
  - Figma removido da lista de tecnologias.
  - Botão "Saiba mais" removido de Sobre mim.
- Lint com oxlint (plugins react, typescript, oxc).

## Progresso

**Concluído (verificado no código; `tsc -b` e build passam, lint com 0 erros):**
- Layout, navegação (inclusive mobile) e rotas.
- Home completa, listagem e detalhe de projetos.
- Seção Tecnologias com logos.
- Contato por ícones.
- Sobre mim.

**Em desenvolvimento:** nada ativo no momento.

**Pendente:**
- Substituir o conteúdo placeholder por conteúdo real.
- Imagens reais dos projetos.
- Substituir o README, que é o template do Vite.
- Testes, CI e configuração de deploy (nenhum existe).

## Problemas conhecidos

- **Conteúdo placeholder:**
  - Textos de Hero, Sobre e Experiência.
  - Projetos com links `example.com` / `github.com/example` e a mesma imagem `project-placeholder.svg`.
  - Contato com `mailto:contato@exemplo.com` e links genéricos de `github.com` e `linkedin.com`.
- **Contato:** não há formulário nem envio de mensagens. Só ícones com links.
- **Cores de marca:** foram ajustadas só para o tema escuro. No tema claro, algumas (ex.: JavaScript, amarelo) teriam pouco contraste. Não há alternância de tema hoje.
- **Arquivos sem uso:** `src/assets/*` (`hero.png`, `react.svg`, `vite.svg`), `public/icons.svg`, `ui/input`, `ui/textarea`, `ui/separator`.
- **Categoria "other":** existe em `Skill` e em `Skills.tsx`, mas não tem itens e não é exibida.
- **Lint:** 2 avisos `react/only-export-components` em `ui/badge.tsx` e `ui/button.tsx` (arquivos shadcn).
- **Vite:** aviso de que `vite.config.ts` usa `__dirname`, incompatível com o `configLoader: native` futuro.
- **Dependências:** `npm install` / `npm audit` reportam 9 vulnerabilidades (1 moderada, 8 altas), ainda não investigadas.
- **Inconsistências menores:**
  - `cn` é importado de `"cn"` em `ui/*` e de `@/lib/utils` no restante do código.
  - A lógica `isPrivate` está duplicada em `ProjectCard` e `ProjectDetailPage`.

## Próximos passos

1. Trocar o conteúdo placeholder por dados reais: textos, experiência, projetos e links de contato.
2. Adicionar screenshots reais dos projetos em `public/images` e apontar em `projects.ts`.
3. Substituir o README pela documentação do projeto.
4. Decidir se os arquivos sem uso (assets do template, `ui/input`, `ui/textarea`, `ui/separator`) serão removidos.
5. Investigar as vulnerabilidades reportadas pelo `npm audit`.
6. Configurar deploy e, se desejado, testes.
