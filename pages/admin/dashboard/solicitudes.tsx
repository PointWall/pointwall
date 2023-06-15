import AdminLayout from '@/components/AdminLayout'
import { prisma } from '@/lib/db'
import { Post } from '@prisma/client'

export async function getStaticProps () {
  try {
    const posts = await prisma.post.findMany()
    return {
      props: {
        posts
      }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

export default function Page ({ posts }: { posts: Post[] }): JSX.Element {
  return (
    <AdminLayout title='Solicitudes'>
      <p>Acá se muestran las solicitudes generadas por usuarios</p>
      {posts.length > 0 ? <div>{posts.map((post, i) => (<div key={i}>post</div>))}</div> : <p>De momento no hay solicitudes de colaboración...</p>}
    </AdminLayout>
  )
}
