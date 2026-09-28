'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/content/data'

// QUOTE GRANDE: una cita centrada cada vez, con navegación
export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length)

  return (
    <div className="quote">
      <span className="quote__mark" aria-hidden="true">
        &ldquo;
      </span>
      <AnimatePresence mode="wait">
        <motion.figure
          key={t.name}
          className="quote__figure"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <blockquote>{t.text}</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <span>
              {t.location} · {t.date}
            </span>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="quote__nav">
        <button type="button" className="round-btn" aria-label="Testimonio anterior" onClick={() => go(-1)}>
          ←
        </button>
        <span className="quote__count" aria-live="polite">
          {String(i + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </span>
        <button type="button" className="round-btn" aria-label="Testimonio siguiente" onClick={() => go(1)}>
          →
        </button>
      </div>
    </div>
  )
}
