import { ArrowDownRight, MessageCircle } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const WHATSAPP_NUMBER = '5585992994767'

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Paulo! Quero conversar sobre um projeto de identidade visual.')}`

  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-28 text-paper lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 lg:px-8 lg:pb-28">
        <div className="max-w-6xl">
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
      </div>
    </section>
  )
}
