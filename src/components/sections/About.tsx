export function About() {
  return (
    <section className="px-6 py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Sobre mim
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Sou um desenvolvedor Full Stack em formação contínua, com interesse
            especial em React, TypeScript e interfaces bem estruturadas.
          </p>
          <p>
            Este site é ao mesmo tempo meu portfólio e um projeto de
            aprendizado: a UI foi pensada para evoluir junto com o código.
          </p>
          <p>
            Texto placeholder — substitua por sua história real, objetivos e
            contexto profissional.
          </p>
        </div>
      </div>
    </section>
  )
}
