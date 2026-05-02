import { ArrowUpRight, X } from 'lucide-react'
import { useEffect } from 'react'

export default function ProjetoDetalhe({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, project])

  if (!project) return null
  const images = project.images?.length ? project.images : [project.cover]

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/85 p-0 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="mx-auto max-w-6xl bg-[#f3f6f8] text-ink shadow-premium">
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-line bg-paper/95 p-4 backdrop-blur">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{project.category}</p>
            <p className="mt-1 line-clamp-1 font-black">{project.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <a className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-paper transition hover:bg-cobalt sm:inline-flex" href={project.behanceUrl} target="_blank" rel="noreferrer">
              Ver no Behance
              <ArrowUpRight size={16} />
            </a>
            <button className="icon-button-light" type="button" aria-label="Fechar projeto" onClick={onClose}>
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 lg:py-12">
          <header className="mb-8 bg-paper p-5 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{project.category}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{project.title}</h2>
            <p className="mt-5 text-lg leading-8 text-graphite">{project.description}</p>
            <dl className="mt-8 grid gap-4 border-y border-line py-6 sm:grid-cols-[0.4fr_1fr]">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Data</dt>
                <dd className="mt-1 font-semibold">{project.date || 'Nao informada'}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Tags</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <a className="button-dark mt-8" href={project.behanceUrl} target="_blank" rel="noreferrer">
              Ver no Behance
              <ArrowUpRight size={19} />
            </a>
          </header>

          <div className="space-y-0 bg-paper shadow-sm">
            {images.map((image, index) => (
              <figure key={`${image}-${index}`} className="border-b border-line last:border-b-0">
                <img className="mx-auto block h-auto w-full bg-paper object-contain" src={image} alt={`${project.title} - imagem ${index + 1}`} loading={index > 1 ? 'lazy' : 'eager'} />
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a className="button-dark" href={project.behanceUrl} target="_blank" rel="noreferrer">
              Visualizar projeto completo no Behance
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
