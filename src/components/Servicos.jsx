import { BadgeCheck, Brush, FileText, Globe2, LayoutGrid, PenTool } from 'lucide-react'

const services = [
  ['Criacao de marcas', 'Logotipos, simbolos e assinaturas com criterio visual e estrategia.', PenTool],
  ['Identidade visual', 'Sistemas completos com cores, tipografia, grafismos e aplicacoes.', BadgeCheck],
  ['Design para redes sociais', 'Pecas consistentes para posicionamento, campanhas e lancamentos.', LayoutGrid],
  ['Materiais graficos', 'Apresentacoes, papelaria, impressos e materiais institucionais.', FileText],
  ['Landing pages', 'Paginas objetivas para apresentar marcas, servicos e campanhas.', Globe2],
  ['Design web', 'Interfaces limpas, responsivas e conectadas a identidade da marca.', Brush],
]

export default function Servicos() {
  return (
    <section id="servicos" className="section bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-brass">Servicos</p>
            <h2 className="section-title max-w-3xl">Da marca ao ponto de contato.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-paper/68">
            Projetos visuais pensados para manter coerencia entre a primeira impressao, o material de venda e a presenca digital.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description, Icon], index) => (
            <article key={title} className="service-card" style={{ animationDelay: `${index * 70}ms` }}>
              <Icon className="text-signal" size={28} />
              <h3 className="mt-8 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-paper/66">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
