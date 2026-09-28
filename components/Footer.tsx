import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import Logo from './Logo'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = `https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`
  return (
    <footer className="footer">
      <div className="footer__media" aria-hidden="true">
        <Image src="/photos/arco-ceremonia-olivos.webp" alt="" fill sizes="100vw" />
      </div>
      <div className="container footer__inner">
        <p className="footer__quote">
          «Cada detalle se elige para reflejar la personalidad, la conexión y la esencia de la pareja.»
          <span>· {siteConfig.planner}</span>
        </p>
        <div className="footer__grid">
          <div>
            <Logo className="logo--light" />
            <p className="footer__small">
              Wedding planner en Barcelona.
              <br />
              {siteConfig.locations.join(' · ')}
            </p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="footer__links">
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/sobre-mi">Sobre mí</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
          <ul className="footer__links">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={ig} target="_blank" rel="noopener noreferrer">
                Instagram {siteConfig.instagram}
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.studioLine}
        </p>
      </div>
    </footer>
  )
}
