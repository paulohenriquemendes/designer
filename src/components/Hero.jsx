import { ArrowDownRight, MessageCircle } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const WHATSAPP_NUMBER = '5585992994767'

export default function Hero({ featuredProject }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ola, Paulo! Quero conversar sobre um projeto de identidade visual.')}`

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-28 text-paper lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(141,213,244,0.2),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#8DD5F4,#ffffff,#1C5D99,#8DD5F4)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <div className="animate-reveal">
          <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-paper/15 bg-white/5 px-4 py-3 backdrop-blur">
            <BrandLogo compact />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brass">Designer grafico / Branding / Web</p>
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] sm:text-7xl lg:text-[6.8rem]">
            Design grafico, marcas e experiencias visuais com proposito.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/72 sm:text-xl">
            Crio identidades visuais, marcas e interfaces que conectam negocios a sua essencia.
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

        <div className="relative min-h-[440px] animate-reveal lg:min-h-[580px]" style={{ animationDelay: '120ms' }}>
          <div className="absolute left-0 top-0 z-10 w-40 border border-paper/15 bg-paper p-3 text-ink shadow-premium sm:w-52">
            <img className="mb-4 h-auto w-full object-contain" src="/brand/minha-logo.svg" alt="Paulo Henrique Mendes" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Do Briefing ao Deploy</p>
            <p className="mt-3 text-2xl font-black leading-none">Marca que nasce estrategica e vive no digital.</p>
          </div>
          <div className="absolute right-0 top-10 h-[74%] w-[82%] overflow-hidden border border-paper/15 bg-graphite shadow-premium">
            <img
              className="h-full w-full object-cover"
              src={featuredProject?.cover}
              alt={featuredProject?.title || 'Projeto de identidade visual de Paulo Henrique Mendes'}
            />
          </div>
          <div className="absolute bottom-0 left-8 right-8 z-20 bg-paper p-5 text-ink shadow-premium sm:left-16">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-signal">Projeto em destaque</p>
            <h2 className="mt-2 text-2xl font-black">{featuredProject?.title || 'Identidade visual'}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
