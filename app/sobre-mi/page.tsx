import Image from 'next/image'
import type { Metadata } from 'next'
import { photo, siteConfig, values } from '@/content/data'
import { pageMeta } from '@/content/seo'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Seal from '@/components/Seal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = pageMeta({
  title: 'Sobre mí · Sara, wedding planner',
  description:
    'Soy Sara, wedding planner en Barcelona. Diseño bodas románticas y delicadas partiendo de vuestra historia. Conoce mi forma de trabajar y los valores de Love Story.',
  path: '/sobre-mi',
})

export default function SobreMiPage() {
  const portrait = photo('invitaciones-lacre-rosa')
  const details = [photo('recogido-novia-velo'), photo('trenza-novia-perlas'), photo('peinado-ondas-rosas')]

  return (
    <>
      {/* Hero editorial tipográfico, sin foto */}
      <section className="editorial-hero">
        <span className="watermark watermark--script" aria-hidden="true">
          Love
        </span>
        <div className="container">
          <Reveal variant="fade-in">
            <span className="eyebrow">Sobre mí</span>
          </Reveal>
          <HeroTitle className="editorial-hero__title" lines={['Me llamo Sara', <em key="e">y me enamoran</em>, 'las historias.']} />
        </div>
      </section>

      <section className="section about-long">
        <div className="container about-long__grid">
          <Reveal variant="scale-in" className="about-long__media">
            <Image src={portrait.src} alt={portrait.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
            <Seal className="about-long__seal" />
          </Reveal>
          <div className="about-long__text">
            <Line />
            <Reveal>
              <p className="lead">{siteConfig.bio}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Llegué a este mundo por la papelería: empecé diseñando las invitaciones de la boda de una amiga, con sobres
                de algodón y un lacre rosa que todavía guardo. Ese día entendí que lo que me apasionaba no era el papel, sino
                lo que contaba. Hoy completo mi formación en un máster de wedding planning en Barcelona y trabajo cada
                boda con la misma ilusión y con un método muy ordenado.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Acepto pocas bodas al año. Así puedo estar de verdad, responder rápido y conocer a cada pareja por su nombre,
                no por su fecha.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <header className="section-head">
            <Line />
            <Reveal>
              <span className="eyebrow">Lo que me guía</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">Mis valores</h2>
            </Reveal>
          </header>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} index={i} className="value">
                <span className="value__num">0{i + 1}</span>
                <h3 className="h-lg">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow">Los detalles que me enamoran</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">Belleza en lo pequeño</h2>
            </Reveal>
          </header>
          <div className="trio">
            {details.map((p, i) => (
              <Reveal key={p.src} variant="scale-in" index={i} className="trio__item">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Me encantaría conoceros" />
    </>
  )
}
