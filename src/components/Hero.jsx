import { ArrowDownRight, MessageCircle } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const WHATSAPP_NUMBER = '5585992994767'

export default function Hero({ featuredProject }) {
  const assetBase = import.meta.env.BASE_URL
  const projectTitle = featuredProject?.title || 'Identidade visual'
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Paulo! Quero conversar sobre um projeto de identidade visual.')}`

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-28 text-paper lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-end">
          <div className="max-w-5xl">
            <div className="mb-9 flex flex-col gap-4 border-l border-line/35 pl-5 sm:flex-row sm:items-center sm:gap-5">
              <BrandLogo compact />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-line">Design gráfico / Branding / Web</p>
            </div>

            <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.22em] text-paper/55">Marcas, identidade visual e presença digital</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.94] sm:text-7xl lg:text-[6.6rem]">
              Design gráfico para marcas que precisam ser lembradas.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/72 sm:text-xl">
              Crio identidades visuais, marcas e interfaces que conectam negócios à sua essência, unindo conceito, estética e aplicação digital.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="button-primary" href="#portfolio">
                Ver projetos
                <ArrowDownRight size={19} />
              </a>
              <a className="button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar no WhatsApp
                <MessageCircle size={19} />
              </a>
            </div>
          </div>

          <aside className="border border-paper/15 bg-paper p-3 text-ink lg:mb-3">
            <div className="bg-ink p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-line">Do Briefing ao Deploy</p>
                  <p className="mt-3 max-w-xs text-2xl font-black leading-none text-line">Marca com conceito, aplicação e presença digital.</p>
                </div>
                <img className="h-16 w-auto shrink-0 object-contain" src={`${assetBase}brand/simbolo.svg`} alt="Símbolo Paulo Henrique Mendes" />
              </div>
            </div>

            <div className="mt-3 overflow-hidden bg-graphite">
              <img
                className="aspect-[4/3] w-full object-cover"
                src={featuredProject?.cover}
                alt={projectTitle}
              />
            </div>

            <div className="mt-3 grid gap-3 bg-ink p-5 sm:grid-cols-[auto_1fr] sm:items-end">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-line">Projeto em destaque</p>
              <h2 className="text-2xl font-black leading-tight text-line sm:text-right">{projectTitle}</h2>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
