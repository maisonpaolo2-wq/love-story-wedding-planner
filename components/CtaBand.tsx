import Link from 'next/link'
import Reveal, { Line } from './Reveal'
import Seal from './Seal'
import { waLink } from './WhatsAppButton'

type Props = { title?: string; text?: string }

export default function CtaBand({
  title = '¿Empezamos a escribir vuestra historia?',
  text = 'Contadme la fecha, el lugar que imagináis y cómo os conocisteis. Os respondo en menos de 48 horas.',
}: Props) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <Seal className="cta-band__seal" />
        <div>
          <Line />
          <Reveal>
            <h2 className="h-xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">{text}</p>
          </Reveal>
          <Reveal delay={0.2} className="btn-row">
            <Link href="/contacto" className="btn btn--solid">
              Pedir primera reunión
            </Link>
            <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
