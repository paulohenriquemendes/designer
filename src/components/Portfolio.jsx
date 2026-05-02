import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'

const filterOptions = ['Todos', 'Marcas', 'Identidade visual', 'Social media', 'Web design']

export default function Portfolio({ projects, loading, error, onOpenProject }) {
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return projects.filter((project) => {
      const byFilter =
        filter === 'Todos' ||
        project.category?.toLowerCase() === filter.toLowerCase() ||
        project.tags?.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
      const searchable = `${project.title} ${project.description} ${project.tags?.join(' ')}`.toLowerCase()
      return byFilter && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [filter, projects, query])

  return (
    <section id="portfolio" className="section bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Portfolio integrado ao Behance</p>
            <h2 className="section-title max-w-4xl">Projetos reais de marcas, brasoes e identidades visuais.</h2>
          </div>
          <div className="flex w-full flex-col gap-3 lg:w-[430px]">
            <label className="search-box">
              <Search size={19} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar projeto" aria-label="Buscar projeto" />
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <SlidersHorizontal className="shrink-0 text-muted" size={18} />
              {filterOptions.map((option) => (
                <button key={option} className={`filter-chip ${filter === option ? 'is-active' : ''}`} type="button" onClick={() => setFilter(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading && (
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-96 animate-pulse bg-white" />
            ))}
          </div>
        )}

        {!loading && error && <p className="mt-8 border border-brass/40 bg-white px-5 py-4 text-sm font-semibold text-graphite">{error}</p>}

        {!loading && (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <button key={project.id} className="project-card group text-left" type="button" onClick={() => onOpenProject(project)}>
                <span className="block aspect-[4/3] overflow-hidden bg-graphite">
                  <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={project.cover} alt={project.title} loading="lazy" />
                </span>
                <span className="block p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal">{project.category}</span>
                  <span className="mt-3 block text-2xl font-black leading-tight">{project.title}</span>
                  <span className="mt-4 line-clamp-2 block leading-7 text-muted">{project.description}</span>
                  <span className="mt-5 flex flex-wrap gap-2">
                    {project.tags?.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}

        {!loading && !filteredProjects.length && <p className="mt-12 text-lg font-semibold text-muted">Nenhum projeto encontrado para esse filtro.</p>}
      </div>
    </section>
  )
}
