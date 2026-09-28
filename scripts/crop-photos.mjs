// Recorta el "chrome" de capturas de iPhone/Instagram (barras oscuras o claras
// arriba/abajo), optimiza a WebP y genera public/og-image.jpg.
// Uso: npm run photos   (fuentes en photos-src/, salida en public/photos/)
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve('photos-src')
const OUT = path.resolve('public/photos')
const MAX_W = 1600
const HERO = 'arco-ceremonia-olivos'

// Una fila es "chrome" si es casi uniforme y muy oscura o muy clara
function isBarRow(data, width, channels, y) {
  let sum = 0
  let sumSq = 0
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    sum += l
    sumSq += l * l
  }
  const mean = sum / width
  const std = Math.sqrt(Math.max(0, sumSq / width - mean * mean))
  return std < 10 && (mean < 30 || mean > 235)
}

async function detectCrop(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  // Solo las capturas de pantalla (formato alto de teléfono) llevan chrome;
  // los posts descargados (1:1, 4:5) se dejan intactos para no comerse cielos claros.
  if (height / width < 1.6) return { left: 0, top: 0, width, height }
  const limit = Math.floor(height * 0.25)
  let top = 0
  while (top < limit && isBarRow(data, width, channels, top)) top++
  let bottom = 0
  while (bottom < limit && isBarRow(data, width, channels, height - 1 - bottom)) bottom++
  if (top < 20) top = 0
  if (bottom < 20) bottom = 0
  return { left: 0, top, width, height: height - top - bottom }
}

async function run() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  for (const f of files) {
    const input = path.join(SRC, f)
    const { height } = await sharp(input).metadata()
    const crop = await detectCrop(input)
    const name = f.replace(/\.[^.]+$/, '')
    const meta = await sharp(input)
      .extract(crop)
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(path.join(OUT, `${name}.webp`))
    console.log(`${crop.height !== height ? 'recortada' : 'ok       '}  ${name}.webp  ${meta.width}x${meta.height}`)
  }

  // OG image 1200x630: foto del hero + overlay + nombre del estudio
  const svg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#3a1420" stop-opacity="0.82"/>
        <stop offset="0.6" stop-color="#3a1420" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#3a1420" stop-opacity="0.1"/>
      </linearGradient></defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="80" y="300" font-family="Georgia, serif" font-style="italic" font-size="96" fill="#ffd9e2">Love</text>
      <text x="80" y="400" font-family="Georgia, serif" font-size="120" letter-spacing="-3" fill="#ffffff">story</text>
      <line x1="80" y1="462" x2="150" y2="462" stroke="#f5a3bb" stroke-width="2"/>
      <text x="80" y="510" font-family="Arial, sans-serif" font-size="26" letter-spacing="6" fill="#fff1f3">WEDDING PLANNER · BARCELONA</text>
    </svg>`)
  await sharp(path.join(SRC, `${HERO}.jpg`))
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .composite([{ input: svg }])
    .jpeg({ quality: 86 })
    .toFile(path.resolve('public/og-image.jpg'))
  console.log('og-image.jpg generada')
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
