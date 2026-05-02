import { useEffect, useState } from 'react'
import fallbackProjects from '../data/projects.json'

export function useProjects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let alive = true

    async function loadProjects() {
      try {
        const response = await fetch('/projects.json', { cache: 'no-cache' })
        if (!response.ok) {
          throw new Error('Nao foi possivel carregar public/projects.json')
        }
        const data = await response.json()
        if (alive && Array.isArray(data) && data.length) {
          setProjects(data)
          setError('')
        }
      } catch (loadError) {
        if (alive) {
          setProjects(fallbackProjects)
          setError('A sincronizacao com o Behance falhou. Exibindo projetos cadastrados manualmente.')
          console.warn(loadError)
        }
      } finally {
        if (alive) setLoading(false)
      }
    }

    const timer = window.setTimeout(loadProjects, 450)
    return () => {
      alive = false
      window.clearTimeout(timer)
    }
  }, [])

  return { projects, loading, error }
}
