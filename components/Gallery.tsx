'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox'
import type { Photo } from '@/content/data'

// Portfolio completo: filtros por categoría + masonry + lightbox
export default function Gallery({ photos }: { photos: Photo[] }) {
  const cats = useMemo(() => ['Todo', ...Array.from(new Set(photos.map((p) => p.category)))], [photos])
  const [cat, setCat] = useState('Todo')
  const [active, setActive] = useState<number | null>(null)
  const shown = cat === 'Todo' ? photos : photos.filter((p) => p.category === cat)

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar por categoría">
        {cats.map((c) => (
          <button key={c} type="button" className="filter" aria-pressed={cat === c} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="masonry">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.button
              layout
              key={p.src}
              type="button"
              className={`masonry__item masonry__item--${p.orientation}`}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${p.alt}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1000px) 33vw, (min-width: 560px) 50vw, 100vw" />
              <span className="masonry__tag">{p.category}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <Lightbox photos={shown} index={active} onChange={setActive} />
    </>
  )
}
