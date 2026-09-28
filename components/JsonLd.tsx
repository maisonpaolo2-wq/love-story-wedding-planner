import { siteConfig, services, testimonials } from '@/content/data'

export default function JsonLd() {
  const url = `https://${siteConfig.domain}`
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'WeddingPlanner'],
    '@id': `${url}/#business`,
    name: `${siteConfig.name} · Wedding planner ${siteConfig.planner}`,
    description: siteConfig.bioShort,
    url,
    image: `${url}/og-image.jpg`,
    logo: `${url}/icon.svg`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    priceRange: '€€',
    founder: { '@type': 'Person', name: siteConfig.planner },
    address: { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressRegion: 'Cataluña', addressCountry: 'ES' },
    areaServed: siteConfig.locations.map((name) => ({ '@type': 'Place', name })),
    sameAs: [`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de wedding planning',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description, url: `${url}/servicios#${s.slug}` },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
