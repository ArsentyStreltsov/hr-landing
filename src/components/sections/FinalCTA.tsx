import { ContactForm } from '../ui/ContactForm'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FinalCTA() {
  return (
    <section id="contact" className="section-pad py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading
          align="center"
          title="Какой проект вы хотите запустить?"
          subtitle="Опишите задачу — предложим сценарий, механики и технологическое решение."
        />

        <Reveal className="mx-auto mt-10 max-w-2xl rounded-[1.7rem] border border-line bg-white p-5 shadow-lift sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
