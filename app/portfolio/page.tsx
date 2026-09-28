import type { Metadata } from 'next'
import { photos } from '@/content/data'
import { pageMeta } from '@/content/seo'
import PageHero from '@/components/PageHero'
import Gallery from '@/components/Gallery'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = pageMeta({
  title: 'Portfolio de bodas',
  description:
    'Ceremonias entre olivos, papelería con lacre, novias y ambientaciones en rosa empolvado. Portfolio e inspiración de Love Story, wedding planner en Barcelona.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        image="/photos/novios-beso-velo.webp"
        alt="Novios a punto de besarse bajo el velo de tul"
        eyebrow="Portfolio"
        lines={['Momentos que', 'se quedan']}
        text="Ceremonias, novias, detalles y ambientaciones con la firma de Love Story."
      />
      <section className="section">
        <div className="container">
          <header className="section-head">
            <Line />
            <Reveal>
              <h2 className="h-xl">Inspiración y trabajos</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Tocad cualquier imagen para verla en grande. Podéis filtrar por lo que más os interese.
              </p>
            </Reveal>
          </header>
          <Gallery photos={photos} />
        </div>
      </section>
      <CtaBand title="¿Os imagináis algo así?" text="Contadme qué os ha gustado y lo adaptamos a vuestra historia." />
    </>
  )
}
