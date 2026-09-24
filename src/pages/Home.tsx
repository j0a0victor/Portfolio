import { Hero } from "@/components/sections/Hero"
import { Skills } from "@/components/sections/Skills"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Experience } from "@/components/sections/Experience"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <About />
      <Contact />
    </>
  )
}
