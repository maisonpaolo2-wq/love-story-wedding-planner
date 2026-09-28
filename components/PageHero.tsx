import Image from 'next/image'
import type { ReactNode } from 'react'
import HeroTitle from './HeroTitle'
import Reveal from './Reveal'

type Props = {
  image: string
  alt: string
  eyebrow: string
  lines: ReactNode[]
  text?: string
}

// Cabecera con foto para páginas secundarias, con borde inferior en arco
export default function PageHero({ image, alt, eyebrow, lines, text }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <Image src={image} alt={alt} fill priority sizes="100vw" />
      </div>
      <div className="container page-hero__content">
        <Reveal variant="fade-in">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
        </Reveal>
        <HeroTitle lines={lines} className="page-hero__title" />
        {text && (
          <Reveal delay={0.5}>
            <p>{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
