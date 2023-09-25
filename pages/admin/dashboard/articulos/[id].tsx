import AdminLayout from '@/components/AdminLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Article (): JSX.Element {
  const [article, setArticle] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    async function fetchArticles (): Promise<any> {
      const res = await fetch(`https://pointwall-api.vercel.app/api/articles/${id}`)
      const { data, error } = await res.json()
      setIsLoading(false)
      if (error !== undefined) return setErrorMessage(error)
      setArticle(data)
    }
    setIsLoading(true)
    if (router.isReady) {
      fetchArticles().catch(console.error)
    }
  }, [id, router.isReady])

  return (
    <AdminLayout title={`Editar artículo (${id})`}>
      {isLoading ? <p>cargando...</p> : <p>HOla {id} - {article.title}</p>}
      {errorMessage.length > 0 ? <p>{errorMessage}</p> : <></>}
    </AdminLayout>
  )
}
