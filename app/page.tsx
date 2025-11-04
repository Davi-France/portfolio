import About from "@/components/about";
import Contact from "@/components/contact";
import { Experience } from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


export default function Page() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="pt-24">
        <About />
      </section>
      <section id="experience" className="pt-24">
        <Experience />
      </section>
      <section id="skills" className="pt-24">
        <Skills />
      </section>
      <section id="projects" className="pt-24">
        <Projects />
      </section>
      <section id="contact" className="pt-24">
        <Contact />
      </section>
      <section id="footer" className="pt-24">
        <Footer />
      </section>
    </>
  )
}