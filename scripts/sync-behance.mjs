import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import fallbackProjects from '../src/data/projects.json' with { type: 'json' }

const PROFILE_URL = 'https://www.behance.net/phmendes?locale=en_US'
const OUTPUT_PATHS = ['public/projects.json', 'src/data/projects.json']

const decodeHtml = (value = '') =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const unique = (items) => [...new Set(items.filter(Boolean))]

function inferCategory(title, tags = []) {
  const text = `${title} ${tags.join(' ')}`.toLowerCase()
  if (text.includes('social')) return 'Social media'
  if (text.includes('web') || text.includes('ui') || text.includes('ux')) return 'Web design'
  if (text.includes('marca') || text.includes('logotipo') || text.includes('branding')) return 'Marcas'
  return 'Identidade visual'
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; PHMendesPortfolioSync/1.0)',
      accept: 'text/html,application/xhtml+xml',
    },
  })

  if (!response.ok) {
    throw new Error(`Falha ao acessar ${url}: ${response.status}`)
  }

  return response.text()
}

function extractProjects(profileHtml) {
  const html = profileHtml.replaceAll('\\u002F', '/').replaceAll('\\u0026', '&')
  const linkRegex = /href="(\/gallery\/(\d+)\/([^"]+))"[^>]*title="Link to project - ([^"]+)"/g
  const imageRegex = /https:\/\/mir-s3-cdn-cf\.behance\.net\/projects\/max_808_webp\/[^"<> ]+/g
  const images = unique(html.match(imageRegex) || [])
  const projects = []
  let match

  while ((match = linkRegex.exec(html))) {
    const [, path, id, , rawTitle] = match
    if (projects.some((project) => project.id === id)) continue
    const fallback = fallbackProjects.find((project) => project.id === id)
    const title = fallback?.title || decodeHtml(rawTitle)
    const cover = images[projects.length] || fallback?.cover || ''

    projects.push({
      id,
      title,
      description: fallback?.description || `Projeto de ${inferCategory(title).toLowerCase()} publicado no Behance de Paulo Henrique Mendes.`,
      category: fallback?.category || inferCategory(title, fallback?.tags),
      tags: fallback?.tags || ['design grafico', 'identidade visual', 'marca'],
      date: fallback?.date || '',
      cover,
      images: cover ? [cover] : [],
      behanceUrl: `https://www.behance.net${path}`,
    })
  }

  return projects
}

async function enrichProject(project) {
  try {
    const html = (await fetchText(project.behanceUrl)).replaceAll('\\u002F', '/').replaceAll('\\u0026', '&')
    const published = html.match(/Published:\s*([^<\n]+)/)?.[1]?.trim()
    const tagMatches = [...html.matchAll(/<li[^>]*>\s*([^<]{2,40})\s*<\/li>/g)].map((match) => decodeHtml(match[1]))
    const imageMatches = unique(html.match(/https:\/\/mir-s3-cdn-cf\.behance\.net\/project_modules\/[^"<> ]+/g) || [])
    const usableImages = imageMatches.filter((image) => /\.(jpg|jpeg|png|webp)(\?|$)/i.test(image)).slice(0, 8)

    return {
      ...project,
      date: published || project.date,
      tags: tagMatches.length ? unique([...project.tags, ...tagMatches]).slice(0, 10) : project.tags,
      category: project.category || inferCategory(project.title, tagMatches.length ? tagMatches : project.tags),
      images: usableImages.length ? usableImages : project.images,
    }
  } catch (error) {
    console.warn(`Nao foi possivel enriquecer ${project.title}: ${error.message}`)
    return project
  }
}

async function main() {
  const profileHtml = await fetchText(PROFILE_URL)
  const projects = extractProjects(profileHtml)

  if (!projects.length) {
    throw new Error('Nenhum projeto foi encontrado no perfil. Mantendo fallback manual.')
  }

  const enriched = await Promise.all(projects.map(enrichProject))
  const content = `${JSON.stringify(enriched, null, 2)}\n`

  for (const outputPath of OUTPUT_PATHS) {
    const absolutePath = resolve(outputPath)
    await mkdir(dirname(absolutePath), { recursive: true })
    await writeFile(absolutePath, content, 'utf8')
    console.log(`Projetos sincronizados em ${outputPath}`)
  }
}

main().catch(async (error) => {
  console.error(error.message)
  const content = `${JSON.stringify(fallbackProjects, null, 2)}\n`
  await writeFile(resolve('public/projects.json'), content, 'utf8')
  process.exitCode = 1
})
