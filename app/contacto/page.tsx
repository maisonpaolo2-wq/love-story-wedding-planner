import type { Metadata } from 'next'
import { faqs, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import Reveal, { Line } from '@/components/Reveal'
import { waLink } from '@/components/WhatsAppButton'

export const metadata: Metadata = pageMeta({
  title: 'Contacto',
  description:
    'Pedid una primera reunión sin compromiso con Sara, wedding planner en Barcelona. Bodas en Barcelona, Maresme, Costa Brava, Penedès, Sitges y Garraf.',
  path: '/contacto',
})

const zones = [
  { name: 'Barcelona', text: 'Hoteles, terrazas, jardines y espacios urbanos con historia.' },
  { name: 'Maresme', text: 'Masías junto al mar y fincas entre viñedos.' },
  { name: 'Costa Brava', text: 'Castillos, calas y pueblos medievales en Girona.' },
  { name: 'Penedès', text: 'Bodegas y masías entre olivos y viñas.' },
  { name: 'Sitges y Garraf', text: 'Villas modernistas y bodas frente al Mediterráneo.' },
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        image="/photos/mesa-limonada-jardin.webp"
        alt="Mesa de limonadas rosas en un jardín con cerezos en flor"
        eyebrow="Contacto"
        lines={['Contadme', 'vuestra historia']}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <Line />
            <Reveal>
              <h2 className="h-xl">Primera reunión sin compromiso</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Rellenad el formulario con lo que sepáis, aunque sea poco. Os respondo personalmente en menos de 48 horas.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <dl className="contact-list">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">
                      Escribirme ahora
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Instagram</dt>
                  <dd>
                    <a
                      href={`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.instagram}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="card">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <header className="section-head">
            <Line />
            <Reveal>
              <span className="eyebrow">Zona de cobertura</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-xl">Bodas en toda Cataluña</h2>
            </Reveal>
          </header>
          <ul className="zones">
            {zones.map((z, i) => (
              <Reveal as="li" key={z.name} index={i} className="zone">
                <h3 className="h-lg">{z.name}</h3>
                <p>{z.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="note">¿Os casáis en otro lugar? Escribidme igualmente, viajo con mucho gusto.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <header className="section-head">
            <Line />
            <Reveal>
              <h2 className="h-xl">Antes de escribirme</h2>
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
          <Reveal className="btn-row">
            <a href={waLink()} className="btn btn--solid" target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
