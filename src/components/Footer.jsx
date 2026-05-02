import { ArrowUpRight } from 'lucide-react'

const links = [
  ['Behance', 'https://www.behance.net/phmendes'],
  ['WhatsApp', 'https://wa.me/COLE_AQUI_SEU_NUMERO_COM_DDI'],
  ['E-mail', 'mailto:COLE_AQUI_SEU_EMAIL'],
  ['GitHub', 'https://github.com/paulohenriquemendes'],
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-black">Paulo Henrique Mendes</p>
          <p className="mt-2 max-w-xl text-muted">Design grafico, criacao de marcas, identidade visual e experiencias digitais em construcao.</p>
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
