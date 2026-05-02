import { Mail, MessageCircle, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '5585992994767'
const EMAIL = 'COLE_AQUI_SEU_EMAIL'

export default function Contato() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Ola, Paulo! Quero solicitar um orcamento de identidade visual.')}`
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Orcamento de identidade visual')}`

  return (
    <section id="contato" className="section bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow text-brass">Contato</p>
          <h2 className="section-title">Vamos conversar sobre sua identidade visual?</h2>
          <p className="mt-6 text-lg leading-8 text-paper/70">
            Solicite um orcamento ou me chame para entender como sua marca pode ganhar mais consistencia, presenca e expressao visual.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
              <MessageCircle size={19} />
            </a>
            <a className="button-secondary" href={mailto}>
              E-mail
              <Mail size={19} />
            </a>
          </div>
        </div>

        <form className="contact-form" action={mailto} method="post" encType="text/plain">
          <label>
            Nome
            <input name="nome" placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" placeholder="voce@email.com" />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" placeholder="Conte rapidamente sobre sua marca ou projeto." />
          </label>
          <button className="button-dark bg-paper text-ink hover:bg-signal hover:text-white" type="submit">
            Enviar mensagem
            <Send size={19} />
          </button>
        </form>
      </div>
    </section>
  )
}
