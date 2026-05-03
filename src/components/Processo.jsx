const steps = ['Briefing', 'Pesquisa e conceito', 'Criação visual', 'Apresentação', 'Ajustes', 'Entrega final']

export default function Processo() {
  return (
    <section id="processo" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">Processo</p>
        <h2 className="section-title max-w-4xl">Um caminho claro para transformar ideia em sistema visual.</h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <article key={step} className="bg-paper p-6">
              <span className="text-sm font-black text-cobalt">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-12 text-xl font-black">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
