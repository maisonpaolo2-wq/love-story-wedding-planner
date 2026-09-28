import type { Metadata, Viewport } from 'next'
import { DM_Sans, Libre_Caslon_Display, Libre_Caslon_Text, Pinyon_Script } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

// Serif de alto contraste como el de sus posts de Instagram + manuscrita del logo
const display = Libre_Caslon_Display({ subsets: ['latin'], weight: '400', variable: '--ff-display', display: 'swap' })
const serif = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--ff-serif',
  display: 'swap',
})
const sans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--ff-sans', display: 'swap' })
const script = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--ff-script', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Wedding planner en Barcelona`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Sara, wedding planner en Barcelona. Organización integral, diseño, papelería con lacre y coordinación de bodas románticas en Barcelona, Maresme y Costa Brava.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#fff8f7',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
