import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { photo, photos, processSteps, services, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Seal from '@/components/Seal'
import Separator from '@/components/Separator'
import Filmstrip from '@/components/Filmstrip'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Wedding planner en Barcelona',
    description:
      'Love Story, wedding planner en Barcelona. Diseño y organizo bodas románticas a partir de vuestra historia, en Barcelona, Maresme, Costa Brava y Penedès.',
    path: '/',
  }),
  title: { absolute: 'Love Story · Wedding planner en Barcelona' },
}

export default function Home() {
  const hero = photo('arco-ceremonia-olivos')
  const intro = photo('mesa-limonada-jardin')
  const about = photo('invitaciones-lacre-rosa')
  const sep1 = photo('coche-clasico-flores')
  const sep2 = photo('barra-champagne-carpa')
  const contact = photo('damas-honor-rosa')
  const strip = photos.filter((p) => ![hero.src, about.src].includes(p.src)).slice(0, 10)

  return (
    <>
      {/* HERO · split editorial con foto en arco */}
      <section className="hero">
        <div className="hero__media">
          <Reveal variant="scale-in" className="hero__arch">
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 900px) 55vw, 100vw" />
          </Reveal>
          <Seal className="hero__seal" />
        </div>
        <div className="hero__text">
          <Reveal variant="fade-in">
            <span className="eyebrow">Wedding planner · Barcelona</span>
          </Reveal>
          <HeroTitle
            className="hero__title"
            lines={[
              'Vuestra historia,',
              <>
                contada en <em>cada</em>
              </>,
              'detalle.',
            ]}
          />
          <Reveal delay={0.6} className="hero__foot">
            <p>{siteConfig.bioShort}</p>
            <div className="btn-row">
              <Link href="/contacto" className="btn btn--solid">
                Contadme vuestra boda
              </Link>
              <Link href="#servicios" className="btn btn--ghost">
                Ver servicios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="intro section">
        <div className="container intro__grid">
          <div className="intro__text">
            <Reveal variant="fade-in">
              <p className="kicker">Hola, soy {siteConfig.planner}</p>
            </Reveal>
            <Reveal>
              <h2 className="h-xl intro__quote">
                La idea de cada boda nace del deseo de reflejar la historia de amor que une a la pareja.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                No trabajo con plantillas. Primero os escucho, después diseño. El resultado es una boda delicada, ordenada
                y profundamente vuestra, en tonos empolvados, texturas suaves y mucha luz.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/sobre-mi" className="link-arrow">
                Conocerme mejor
              </Link>
            </Reveal>
          </div>
          <Reveal variant="scale-in" className="intro__media">
            <Image src={intro.src} alt={intro.alt} fill sizes="(min-width: 900px) 60vw, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS · cards horizontales, empieza con línea + título */}
      <section id="servicios" className="services section section--surface">
        <div className="container">
          <header className="section-head">
            <Line />
            <Reveal>
              <span className="eyebrow">Servicios</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">Cuatro maneras de acompañaros</h2>
            </Reveal>
          </header>
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal as="article" key={s.slug} index={i} className={`svc-card${i % 2 ? ' svc-card--rev' : ''}`}>
                <div className="svc-card__media">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width: 900px) 45vw, 100vw" />
                </div>
                <div className="svc-card__body">
                  <span className="svc-card__num">0{i + 1}</span>
                  <h3 className="h-lg">{s.title}</h3>
                  <p>{s.description}</p>
                  <Link href={`/servicios#${s.slug}`} className="link-arrow">
                    Qué incluye
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARADOR 1 · foto a sangre con cita de sus posts */}
      <Separator image={sep1.src} alt={sep1.alt}>
        <Reveal>
          <p className="separator__quote">{siteConfig.quote}</p>
        </Reveal>
      </Separator>

      {/* PROCESO · números grandes, empieza con watermark */}
      <section className="process section">
        <span className="watermark" aria-hidden="true">
          proceso
        </span>
        <div className="container">
          <header className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow">Cómo trabajamos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">De la primera charla al último baile</h2>
            </Reveal>
          </header>
          <ol className="big-steps">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} index={i} className="big-step">
                <span className="big-step__num">{String(s.number).padStart(2, '0')}</span>
                <div>
                  <h3 className="h-lg">{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · filmstrip a sangre, empieza con número de sección */}
      <section className="portfolio-home section section--surface">
        <div className="container portfolio-home__head">
          <div>
            <Reveal variant="fade-in">
              <span className="section-num">04</span>
            </Reveal>
            <Reveal>
              <h2 className="h-xl">Inspiración y detalles</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="link-arrow">
              Ver portfolio completo
            </Link>
          </Reveal>
        </div>
        <Filmstrip photos={strip} />
      </section>

      {/* SOBRE MÍ · foto portrait >50% con watermark del nombre */}
      <section className="about section">
        <span className="watermark watermark--script" aria-hidden="true">
          {siteConfig.planner}
        </span>
        <div className="container about__grid">
          <Reveal variant="scale-in" className="about__media">
            <Image src={about.src} alt={about.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
          </Reveal>
          <div className="about__text">
            <Line />
            <Reveal>
              <span className="eyebrow">Sobre mí</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">
                Una boda no se decora, <em>se cuenta</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Soy Sara y me estoy formando como wedding planner en un máster profesional en Barcelona. Llego a cada boda
                con la ilusión intacta, con libreta, cinta de raso y un plan B para todo.
              </p>
              <p>
                Me enamoran los detalles que casi nadie ve: el lacre de un sobre, la caída de un velo, la luz de las cinco
                de la tarde entre los olivos.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href="/sobre-mi" className="btn">
                Mi historia
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEPARADOR 2 */}
      <Separator image={sep2.src} alt={sep2.alt}>
        <Reveal>
          <p className="separator__quote separator__quote--sm">
            Cada detalle se selecciona cuidadosamente para convertir la celebración en un relato auténtico de vuestro amor.
          </p>
        </Reveal>
      </Separator>

      {/* TESTIMONIOS · quote grande */}
      <section className="testimonials section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--center">Parejas que confiaron</span>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact-home section">
        <div className="container contact-home__grid">
          <div className="contact-home__side">
            <Line />
            <Reveal>
              <h2 className="h-xl">Hablemos de vuestra boda</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                La primera reunión es sin compromiso, en Barcelona o por videollamada. Os respondo en menos de 48 horas.
              </p>
              <p>
                <a href={waLink()} className="link-arrow" target="_blank" rel="noopener noreferrer">
                  Prefiero WhatsApp
                </a>
              </p>
            </Reveal>
            <Reveal variant="scale-in" className="contact-home__media">
              <Image src={contact.src} alt={contact.alt} fill sizes="(min-width: 900px) 35vw, 100vw" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="card">
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
