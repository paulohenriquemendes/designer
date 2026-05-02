import { ArrowUpRight } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const links = [
  ['Behance', 'https://www.behance.net/phmendes'],
  ['WhatsApp', 'https://wa.me/5585992994767'],
  ['E-mail', 'mailto:paulohenriquedeoliveiramendes@gmail.com'],
  ['GitHub', 'https://github.com/paulohenriquemendes'],
]

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-5 py-10 text-paper lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <BrandLogo />
          <p className="mt-2 max-w-xl text-paper/65">Design gráfico, criação de marcas, identidade visual e experiências digitais em construção.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map(([label, href]) => (
            <a key={label} className="footer-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
