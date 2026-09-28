// Contenido de Love Story · Sara, wedding planner en Barcelona.
// Datos marcados con TODO: confirmar con la clienta (email, WhatsApp, dominio, testimonios).

export const siteConfig = {
  name: 'Love Story',
  planner: 'Sara',
  domain: 'lovestorybysara.com', // TODO dominio definitivo
  email: 'hola@lovestorybysara.com', // TODO email real
  whatsapp: '34600000000', // TODO WhatsApp real, solo números con prefijo
  instagram: '@alumnamasterwpsara',
  locations: ['Barcelona', 'Maresme', 'Costa Brava', 'Penedès', 'Sitges y Garraf'],
  tagline: 'Bodas que cuentan vuestra historia de amor',
  bio: 'Soy Sara, wedding planner en Barcelona. Me estoy especializando en organización y diseño de bodas en un máster profesional, y cada boda que acompaño la vivo como si fuera la primera: con libreta, paciencia infinita y un cariño enorme por los detalles. Creo que una boda no se decora, se cuenta. Por eso empiezo siempre por vosotros, por cómo os conocisteis, por lo que os hace reír y por lo que queréis que sientan vuestros invitados, y a partir de ahí diseño cada elemento: la papelería, las flores, la luz, el ritmo del día. Mi estilo es romántico y delicado, con tonos empolvados, texturas suaves y un orden impecable detrás de todo lo que se ve.',
  bioShort:
    'Organizo y diseño bodas románticas en Barcelona partiendo de lo único que no se puede copiar: vuestra historia. Cada detalle se elige para que la celebración se parezca a vosotros.',
  quote: 'Un simple «sí, quiero» que en un instante transforma dos vidas en un solo destino.',
  studioLine: 'Wedding planner · Barcelona',
}

export type Service = {
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  includes: string[]
}

export const services: Service[] = [
  {
    title: 'Organización integral',
    slug: 'organizacion-integral',
    description: 'Os acompaño desde el primer café hasta el último baile: proveedores, presupuesto, calendario y diseño.',
    longDescription:
      'Es el servicio para parejas que quieren disfrutar del camino sin cargar con él. Empezamos con una sesión para conocer vuestra historia y definir prioridades, presupuesto e invitados. Después busco y negocio espacio y proveedores, preparo un calendario claro con cada decisión en su momento y os presento un concepto de diseño completo. Durante meses seré vuestra única persona de contacto, y el día de la boda dirijo todo el montaje y la coordinación para que vosotros solo tengáis que vivirlo.',
    image: '/photos/novios-beso-velo.webp',
    includes: [
      'Sesión inicial de historia y prioridades',
      'Búsqueda de espacio y selección de proveedores',
      'Control de presupuesto y calendario compartido',
      'Concepto de diseño y moodboard',
      'Coordinación completa del día de la boda',
    ],
  },
  {
    title: 'Diseño y ambientación',
    slug: 'diseno-ambientacion',
    description: 'Flores, mesas, luz y rincones pensados como un todo, con una paleta que respira vuestra personalidad.',
    longDescription:
      'Transformo el espacio en un escenario coherente con vuestra historia. Defino la paleta, las texturas y los materiales, diseño la ceremonia, el banquete y los rincones especiales como la barra de bebidas, el photocall o la mesa de limonadas, y trabajo codo con codo con floristas y decoradores. Recibiréis planos, referencias visuales y un listado de montaje para que nada quede a la improvisación.',
    image: '/photos/barra-champagne-carpa.webp',
    includes: [
      'Paleta de color y concepto visual',
      'Diseño de ceremonia y banquete',
      'Rincones especiales y photocall',
      'Coordinación con florista y decoración',
      'Plano de montaje y lista de materiales',
    ],
  },
  {
    title: 'Papelería y detalles',
    slug: 'papeleria-detalles',
    description: 'Invitaciones con lacre, seating, minutas y señalética que cuentan vuestra boda desde el primer sobre.',
    longDescription:
      'La papelería es lo primero que vuestros invitados tocan de la boda, y marca el tono de todo lo que viene. Diseño una línea gráfica propia con monograma, invitaciones con sobre y sello de lacre, save the date, seating plan, minutas, números de mesa y señalética. También me ocupo de los detalles para invitados y de que cada pieza llegue a tiempo y en perfecto estado.',
    image: '/photos/invitaciones-lacre-rosa.webp',
    includes: [
      'Monograma y línea gráfica de la boda',
      'Invitaciones con sobre y lacre',
      'Seating plan, minutas y números de mesa',
      'Señalética de ceremonia y banquete',
      'Detalles personalizados para invitados',
    ],
  },
  {
    title: 'Coordinación del día',
    slug: 'coordinacion-del-dia',
    description: 'Si ya lo tenéis casi todo, tomo el timón unas semanas antes para que el día fluya sin que nadie lo note.',
    longDescription:
      'Pensado para parejas que han organizado su boda por su cuenta y quieren soltarla en buenas manos. Unas seis semanas antes reviso contratos y proveedores, detecto huecos, preparo el timing minuto a minuto y visito el espacio con vosotros. El día de la boda dirijo montaje, ceremonia, entradas, discursos y cierre, y resuelvo cualquier imprevisto en silencio.',
    image: '/photos/manos-anillo-encaje.webp',
    includes: [
      'Revisión de contratos y proveedores',
      'Timing detallado minuto a minuto',
      'Visita técnica al espacio',
      'Ensayo de ceremonia',
      'Coordinación de montaje, evento y cierre',
    ],
  },
]

export const processSteps = [
  {
    number: 1,
    title: 'Nos conocemos',
    description:
      'Un café en Barcelona o una videollamada. Me contáis vuestra historia, vuestro estilo y lo que no queréis de ninguna manera. Sin compromiso.',
  },
  {
    number: 2,
    title: 'Diseñamos la idea',
    description:
      'Os presento un concepto con paleta, referencias y un primer presupuesto. Ajustamos juntos hasta que al verlo digáis «somos nosotros».',
  },
  {
    number: 3,
    title: 'Damos forma a cada detalle',
    description:
      'Proveedores, papelería, flores, música y timing. Un calendario compartido os dice en todo momento qué está hecho y qué viene después.',
  },
  {
    number: 4,
    title: 'Vivís vuestro día',
    description:
      'Llego la primera y me voy la última. Vosotros solo tenéis que disfrutar, yo me ocupo de que la historia se cuente tal y como la soñasteis.',
  },
]

// TODO: testimonios de ejemplo, sustituir por reseñas reales de clientas
export const testimonials = [
  {
    name: 'Laura y Marc',
    date: 'Junio 2026',
    location: 'Masía en el Penedès',
    text: 'Queríamos una ceremonia entre olivos y que Kira, nuestra golden, llevara los anillos. Sara ensayó con ella dos veces y el día caminó por el pasillo como si lo hubiera hecho siempre. No hubo un solo momento de nervios.',
  },
  {
    name: 'Clara y Jordi',
    date: 'Mayo 2026',
    location: 'Sant Andreu de Llavaneres, Maresme',
    text: 'Las invitaciones con lacre rosa fueron lo primero que vio la familia y todo el mundo nos preguntó por ellas. Sara diseñó el monograma, el seating y hasta las etiquetas de la mesa de limonadas. Todo encajaba.',
  },
  {
    name: 'Anna y Pol',
    date: 'Septiembre 2025',
    location: 'Hotel en Sitges',
    text: 'La contratamos solo para coordinar el día porque lo teníamos casi todo hecho. Encontró dos fallos en los horarios del catering que nos habrían arruinado el cóctel. El día de la boda ni la vimos, y eso es lo mejor que se puede decir.',
  },
  {
    name: 'Marta e Iván',
    date: 'Julio 2025',
    location: 'Castillo en la Costa Brava',
    text: 'Íbamos a casarnos desde Madrid sin conocer ningún proveedor en Girona. Sara nos mandaba cada viernes un resumen con fotos y decisiones pendientes. Llegamos a la boda sabiendo exactamente cómo iba a ser, y aun así nos emocionó.',
  },
]

export type Photo = {
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
  category: 'Ceremonias' | 'Novias' | 'Detalles' | 'Ambientación'
}

export const photos: Photo[] = [
  { src: '/photos/arco-ceremonia-olivos.webp', alt: 'Arco de ceremonia con rosas y cortinas blancas entre olivos al atardecer', featured: true, orientation: 'landscape', category: 'Ceremonias' },
  { src: '/photos/novios-beso-velo.webp', alt: 'Novios a punto de besarse bajo el velo de tul rodeados de flores blancas', featured: true, orientation: 'portrait', category: 'Novias' },
  { src: '/photos/mesa-limonada-jardin.webp', alt: 'Mesa de limonadas rosas con dispensadores de cristal en un jardín con cerezos en flor', featured: true, orientation: 'landscape', category: 'Ambientación' },
  { src: '/photos/invitaciones-lacre-rosa.webp', alt: 'Invitaciones de boda en sobres de papel texturizado con cinta y sello de lacre rosa', featured: true, orientation: 'portrait', category: 'Detalles' },
  { src: '/photos/damas-honor-rosa.webp', alt: 'Cuatro damas de honor con vestidos rosa empolvado y ramos blancos bajo una glorieta', featured: false, orientation: 'portrait', category: 'Novias' },
  { src: '/photos/barra-champagne-carpa.webp', alt: 'Barra circular de champagne decorada con pampas y rosas dentro de una carpa blanca', featured: true, orientation: 'landscape', category: 'Ambientación' },
  { src: '/photos/coche-clasico-flores.webp', alt: 'Coche clásico blanco decorado con rosas rosas frente a una galería de columnas', featured: true, orientation: 'landscape', category: 'Detalles' },
  { src: '/photos/perro-arco-ceremonia.webp', alt: 'Golden retriever con pajarita de lazo en el pasillo de una ceremonia floral', featured: false, orientation: 'portrait', category: 'Ceremonias' },
  { src: '/photos/manos-anillo-encaje.webp', alt: 'Manos de los novios con anillo de compromiso y manga de encaje del vestido', featured: false, orientation: 'landscape', category: 'Novias' },
  { src: '/photos/recogido-novia-velo.webp', alt: 'Recogido de novia con flores rosas, perlas y velo de encaje', featured: false, orientation: 'portrait', category: 'Novias' },
  { src: '/photos/trenza-novia-perlas.webp', alt: 'Trenza de novia con perlas y pequeñas rosas sobre el velo', featured: false, orientation: 'portrait', category: 'Novias' },
  { src: '/photos/peinado-ondas-rosas.webp', alt: 'Semirecogido de ondas con rosas rosadas y horquillas de perla', featured: false, orientation: 'portrait', category: 'Novias' },
]

export const photo = (name: string) => {
  const p = photos.find((x) => x.src.includes(name))
  if (!p) throw new Error(`Foto no encontrada: ${name}`)
  return p
}

export const values = [
  { title: 'Escuchar antes de decorar', text: 'La primera reunión no va de flores ni de colores, va de vosotros. El diseño llega después.' },
  { title: 'Detalle con sentido', text: 'Cada lacre, cada cinta y cada vela tienen un porqué. Nada se pone solo porque queda bonito.' },
  { title: 'Calma organizada', text: 'Calendarios claros, proveedores de confianza y un plan B para todo. La tranquilidad también se diseña.' },
  { title: 'Cercanía de verdad', text: 'Pocas bodas al año para poder estar presente en cada una, sin prisas ni plantillas.' },
]

export const faqs = [
  { q: '¿Con cuánta antelación debemos contactar?', a: 'Lo ideal para organización integral son entre 10 y 14 meses. Para coordinación del día, al menos dos meses antes.' },
  { q: '¿Trabajas fuera de Barcelona?', a: 'Sí, en toda Cataluña: Maresme, Costa Brava, Penedès, Sitges y Garraf. Para otras zonas, consultadme.' },
  { q: '¿Podemos contratar solo la papelería?', a: 'Por supuesto. Diseño líneas de papelería completas o piezas sueltas como invitaciones o seating.' },
  { q: '¿Cómo se calcula el presupuesto?', a: 'Depende del servicio, número de invitados y localización. Tras la primera reunión recibís una propuesta cerrada y sin sorpresas.' },
]
