import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Servicos from './components/Servicos.jsx'
import Portfolio from './components/Portfolio.jsx'
import ProjetoDetalhe from './components/ProjetoDetalhe.jsx'
import Processo from './components/Processo.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import { useProjects } from './hooks/useProjects.js'

export default function App() {
  const { projects, loading, error } = useProjects()
  const [activeProject, setActiveProject] = useState(null)

  const featuredProject = useMemo(() => projects[0], [projects])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero featuredProject={featuredProject} />
        <Sobre />
        <Servicos />
        <Portfolio
          projects={projects}
          loading={loading}
          error={error}
          onOpenProject={setActiveProject}
        />
        <Processo />
        <Contato />
      </main>
      <Footer />
      <ProjetoDetalhe project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
