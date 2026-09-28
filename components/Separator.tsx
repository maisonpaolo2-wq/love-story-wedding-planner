import Image from 'next/image'
import type { ReactNode } from 'react'
import Reveal from './Reveal'

// Foto a sangre completa con velo del color de la marca: rompe la paleta a propósito
export default function Separator({ image, alt, children }: { image: string; alt: string; children?: ReactNode }) {
  return (
    <section className="separator">
      <Reveal variant="scale-in" className="separator__media">
        <Image src={image} alt={alt} fill sizes="100vw" />
      </Reveal>
      {children && <div className="container separator__content">{children}</div>}
    </section>
  )
}
