import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import BrandLogo from './BrandLogo.jsx'

const navItems = [
  ['Inicio', '#inicio'],
  ['Sobre', '#sobre'],
  ['Portfolio', '#portfolio'],
  ['Servicos', '#servicos'],
  ['Processo', '#processo'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/88 text-paper backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Menu principal">
        <a href="#inicio" className="group flex items-center gap-3">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="hidden items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-bold text-ink transition hover:bg-signal hover:text-ink lg:flex" href="#portfolio">
          Ver portfolio
          <ArrowUpRight size={16} />
        </a>

        <button className="icon-button lg:hidden" type="button" aria-label="Abrir menu" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink px-5 py-4 text-paper lg:hidden">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <button className="icon-button" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <div className="mt-12 grid gap-6">
            {navItems.map(([label, href]) => (
              <a key={href} className="text-3xl font-black" href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-5 py-3 font-bold text-ink" href="#portfolio" onClick={() => setOpen(false)}>
              Ver portfolio
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
