import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="px-6 py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Contato
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Formulário de demonstração. Ainda não envia mensagens — apenas a UI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl space-y-4"
          noValidate
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input id="name" name="name" type="text" autoComplete="name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <Textarea id="message" name="message" rows={5} />
          </div>

          <Button type="submit">Enviar mensagem</Button>
        </form>
      </div>
    </section>
  )
}
