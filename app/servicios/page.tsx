import Image from 'next/image'
import type { Metadata } from 'next'
import { faqs, processSteps, services } from '@/content/data'
import { pageMeta } from '@/content/seo'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = pageMeta({
  title: 'Servicios de wedding planner',
  description:
    'Organización integral, diseño y ambientación, papelería con lacre y coordinación del día. Servicios de wedding planner en Barcelona, Maresme y Costa Brava.',
  path: '/servicios',
  image: '/og-image.jpg',
})

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        image="/photos/barra-champagne-carpa.webp"
        alt="Barra de champagne con pampas y rosas en una carpa blanca"
        eyebrow="Servicios"
        lines={['Todo lo que', 'vuestra boda necesita']}
        text="Elegid el acompañamiento completo o solo la parte que os quita el sueño."
      />

      <section className="section">
        <div className="container svc-detail-list">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className={`svc-detail${i % 2 ? ' svc-detail--rev' : ''}`}>
              <Reveal variant="scale-in" className="svc-detail__media">
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 900px) 50vw, 100vw" />
              </Reveal>
              <div className="svc-detail__body">
                <Reveal variant="fade-in">
                  <span className="section-num">0{i + 1}</span>
                </Reveal>
                <Reveal>
                  <h2 className="h-xl">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="lead">{s.longDescription}</p>
                </Reveal>
                <ul className="tick-list">
                  {s.includes.map((item, j) => (
                    <Reveal as="li" key={item} index={j}>
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO · timeline horizontal numerada */}
      <section className="section section--surface">
        <div className="container">
          <header className="section-head">
            <Line />
            <Reveal>
              <span className="eyebrow">El camino juntos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">Así trabajamos</h2>
            </Reveal>
          </header>
          <ol className="timeline">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} index={i} className="timeline__step">
                <span className="timeline__dot">{s.number}</span>
                <h3 className="h-lg">{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <header className="section-head">
            <Line />
            <Reveal>
              <h2 className="h-xl">Preguntas frecuentes</h2>
            </Reveal>
          </header>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} index={i}>
                <details className="faq__item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="¿Qué servicio encaja con vosotros?" text="Si dudáis, lo vemos juntos en una primera reunión sin compromiso." />
    </>
  )
}
