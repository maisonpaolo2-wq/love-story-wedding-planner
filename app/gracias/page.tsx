import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { pageMeta } from '@/content/seo'
import Reveal, { Line } from '@/components/Reveal'
import { waLink } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Gracias',
    description:
      'Gracias por escribir a Love Story, wedding planner en Barcelona. Sara os responderá personalmente en menos de 48 horas para preparar vuestra primera reunión.',
    path: '/gracias',
  }),
  robots: { index: false, follow: true },
}

export default function GraciasPage() {
  return (
    <section className="thanks">
      <div className="container thanks__grid">
        <div>
          <Reveal variant="fade-in">
            <span className="eyebrow">Mensaje recibido</span>
          </Reveal>
          <Reveal>
            <h1 className="h-display">
              <em>Gracias</em> por contarme vuestra historia
            </h1>
          </Reveal>
          <Line />
          <Reveal delay={0.1}>
            <p className="lead">
              Leo cada mensaje con calma y os responderé personalmente en menos de 48 horas. Mientras tanto, podéis ver más
              inspiración en el portfolio o escribirme por WhatsApp si os corre prisa.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="btn-row">
            <Link href="/portfolio" className="btn btn--solid">
              Ver portfolio
            </Link>
            <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link href="/" className="btn btn--ghost">
              Volver al inicio
            </Link>
          </Reveal>
        </div>
        <Reveal variant="scale-in" className="thanks__media">
          <Image src="/photos/manos-anillo-encaje.webp" alt="Manos de los novios con anillo y manga de encaje" fill sizes="(min-width: 900px) 40vw, 100vw" />
        </Reveal>
      </div>
    </section>
  )
}
