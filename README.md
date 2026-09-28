# Love Story · Wedding planner Barcelona

Web en Next.js 15 (App Router, CSS puro, framer-motion, Resend) para Sara, wedding planner en Barcelona (IG @alumnamasterwpsara).

- Contenido: `content/data.ts` (buscar `TODO`: email, WhatsApp, dominio y testimonios de ejemplo)
- Fotos: originales en `photos-src/`, `npm run photos` recorta, optimiza a WebP y genera `public/og-image.jpg`
- Formulario: `app/api/lead` con Resend, variables en `.env.local.example`
- Dev: `npm run dev` (puerto 3695). En este PC: `NODE_OPTIONS=--use-system-ca` para next/font.
