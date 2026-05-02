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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/80 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="mx-auto max-w-5xl bg-paper text-ink shadow-premium">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/95 p-4 backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-muted">Projeto Behance</p>
          <button className="icon-button-light" type="button" aria-label="Fechar projeto" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {(project.images?.length ? project.images : [project.cover]).map((image) => (
              <img key={image} className="w-full bg-graphite object-cover" src={image} alt={project.title} />
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{project.category}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">{project.title}</h2>
            <p className="mt-5 text-lg leading-8 text-graphite">{project.description}</p>
            <dl className="mt-8 grid gap-4 border-y border-line py-6">
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
          </aside>
        </div>
      </div>
    </div>
  )
}
