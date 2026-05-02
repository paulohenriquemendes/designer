import { ArrowDownRight, MessageCircle } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const WHATSAPP_NUMBER = '5585992994767'

export default function Hero({ featuredProject }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Paulo! Quero conversar sobre um projeto de identidade visual.')}`

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-28 text-paper lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-4 border border-paper/15 px-4 py-3">
            <BrandLogo compact />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brass">Design gráfico / Branding / Web</p>
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] sm:text-7xl lg:text-[6.8rem]">
            Design gráfico, marcas e experiências visuais com propósito.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/72 sm:text-xl">
            Crio identidades visuais, marcas e interfaces que conectam negócios à sua essência.
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

        <div className="relative min-h-[440px] lg:min-h-[580px]">
          <div className="absolute left-0 top-0 z-10 w-40 border border-line bg-paper p-3 text-ink sm:w-52">
            <div className="mb-4 grid h-16 w-16 place-items-center bg-ink p-3">
              <img className="h-full w-full object-contain" src="/brand/simbolo.svg" alt="Símbolo Paulo Henrique Mendes" />
            </div>
            <div className="bg-ink p-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Do Briefing ao Deploy</p>
              <p className="mt-3 text-2xl font-black leading-none text-signal">Marca com conceito, aplicação e presença digital.</p>
            </div>
          </div>
          <div className="absolute right-0 top-10 h-[74%] w-[82%] overflow-hidden border border-paper/15 bg-graphite">
            <img
              className="h-full w-full object-cover"
              src={featuredProject?.cover}
              alt={featuredProject?.title || 'Projeto de identidade visual de Paulo Henrique Mendes'}
            />
          </div>
          <div className="absolute bottom-0 left-8 right-8 z-20 border border-line bg-paper p-4 text-ink sm:left-16">
            <div className="bg-ink p-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-signal">Projeto em destaque</p>
              <h2 className="mt-2 text-2xl font-black text-signal">{featuredProject?.title || 'Identidade visual'}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
