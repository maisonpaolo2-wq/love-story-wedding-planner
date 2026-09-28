'use client'

import { useState, type FormEvent } from 'react'
import { services } from '@/content/data'

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'No se pudo enviar')
      // Navegación completa: la página de gracias siempre empieza arriba
      window.location.assign('/gracias')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'No se pudo enviar')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Vuestros nombres</label>
          <input id="name" name="name" autoComplete="name" required minLength={2} placeholder="Ej. Laura y Marc" />
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="eventType">Qué necesitáis</label>
          <select id="eventType" name="eventType" defaultValue={services[0].title}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Aún no lo sé</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="date">Fecha aproximada</label>
          <input id="date" name="date" placeholder="Ej. junio 2027" />
        </div>
      </div>
      {!compact && (
        <div className="form__row">
          <div className="field">
            <label htmlFor="guests">Invitados</label>
            <input id="guests" name="guests" inputMode="numeric" placeholder="Ej. 120" />
          </div>
          <div className="field">
            <label htmlFor="venue">Lugar o zona</label>
            <input id="venue" name="venue" placeholder="Ej. Maresme, aún sin espacio" />
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="message">Contadme vuestra historia</label>
        <textarea id="message" name="message" rows={compact ? 3 : 5} placeholder="Cómo os conocisteis, qué estilo os gusta, qué os preocupa…" />
      </div>
      <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="check">
        <input type="checkbox" name="privacy" required />
        <span>Acepto que Love Story use estos datos solo para responder a mi consulta.</span>
      </label>
      {status === 'error' && (
        <p className="form__error" role="alert">
          {error}. También podéis escribirme por WhatsApp.
        </p>
      )}
      <div>
        <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}
