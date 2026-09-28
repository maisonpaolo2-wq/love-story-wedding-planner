'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'
import type { Photo } from '@/content/data'

// Tira horizontal a sangre con scroll-snap; cada foto abre el lightbox
export default function Filmstrip({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      <div className="filmstrip" tabIndex={0} aria-label="Galería de bodas, desliza para ver más">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`filmstrip__item${i % 3 === 1 ? ' filmstrip__item--tall' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Ampliar: ${p.alt}`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 900px) 30vw, 80vw" />
          </button>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onChange={setActive} />
    </>
  )
}
