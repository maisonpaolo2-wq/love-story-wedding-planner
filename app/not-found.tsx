import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="thanks">
      <div className="container thanks__grid">
        <div>
          <span className="eyebrow">Error 404</span>
          <h1 className="h-display">
            Esta página <em>se ha perdido</em> camino del altar
          </h1>
          <span className="line-deco line-deco--static" />
          <p className="lead">Puede que el enlace haya cambiado. Volvamos al principio de la historia.</p>
          <div className="btn-row">
            <Link href="/" className="btn btn--solid">
              Ir al inicio
            </Link>
            <Link href="/contacto" className="btn">
              Contacto
            </Link>
          </div>
        </div>
        <div className="thanks__media">
          <Image src="/photos/perro-arco-ceremonia.webp" alt="Golden retriever con pajarita esperando en el pasillo de la ceremonia" fill sizes="(min-width: 900px) 40vw, 100vw" />
        </div>
      </div>
    </section>
  )
}
