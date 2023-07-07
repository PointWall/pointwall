import AdminLayout from '@/components/AdminLayout'
// import { prisma } from '@/lib/db'
import Image from 'next/image'
import { Post, User, Image as PostImage } from '@prisma/client'
import { useEffect, useState } from 'react'

interface PostProps {
  post: Post & { author: User, images: PostImage[] }
}

// export async function getStaticProps (): Promise<any> {
//   const posts = await prisma.post.findMany({
//     include: {
//       author: true,
//       images: true,
//       tags: true
//     },
//     take: 10
//   })
//   return {
//     props: {
//       posts: JSON.parse(JSON.stringify(posts))
//     }
//   }
// }

function PostModal ({ post, setPostModal }: PostProps & { setPostModal: Function }): JSX.Element {
  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0'>
      <div className='animate-[slideUp_.3s_ease-out] w-full h-full'>
        <div className='fixed w-3/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-white shadow-lg border rounded-lg'>
          <button onClick={() => setPostModal(null)} className='absolute top-0 right-0 m-4 px-2 border border-gray-300 rounded-md text-gray-500 hover:shadow-lg transition-shadow'>
            x
          </button>
          <h2 className='text-4xl mb-4 font-semibold'>{post.title}</h2>
          <Image src={post.images.length > 0 ? post.images[0].url : '/images/PointWall.png'} alt='Imagen principal' width={100} height={100} />
          <div className='my-4'>
            <p className='text-sm'>Descripción</p>
            <p className='text-lg'>{post.description ?? 'Sin descripción'}</p>
          </div>
          <div className='flex gap-8 my-4'>
            <div>
              <p className='text-sm'>Tipo de arte</p>
              <h3 className='text-xl'>{post.artType}</h3>
            </div>
            <div>
              <p className='text-sm'>Tipo de usuario</p>
              <h3 className='text-xl'>{post.userType.length > 0 ? post.userType : 'No especificado'}</h3>
            </div>
          </div>
          <div className='flex gap-8 my-4'>
            <div>
              <p className='text-sm'>Nombre del usuario</p>
              <h3 className='text-xl'>{post.author.firstName} {post.author.lastName}</h3>
            </div>
            <div>
              <p className='text-sm'>Correo del usuario</p>
              <h3 className='flex items-center gap-2 text-xl'>
                <Image src={post.author.image ?? '/images/PointWall.png'} alt='Imagen de perfil de usuario' width={35} height={35} className='rounded-full' />
                <span>{post.author.email}</span>
              </h3>
            </div>
          </div>
          <div className='my-4'>
            <p className='text-sm'>Fecha de envío</p>
            <h3 className='text-xl'>{new Date(post.createdAt).toLocaleDateString('es-AR')}</h3>
          </div>
          <div className='space-x-2 w-fit mx-auto'>
            <button className='p-2 text-blue-500 border border-blue-500 rounded-md hover:shadow-[0px_0px_0px_4px] transition-shadow'>
              Aceptar
            </button>
            <button className='p-2 text-yellow-500 border border-yellow-500 rounded-md hover:shadow-[0px_0px_0px_4px] transition-shadow'>
              Modificar
            </button>
            <button className='p-2 text-red-500 border border-red-500 rounded-md hover:shadow-[0px_0px_0px_4px] transition-shadow'>
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PostCard ({ post, setPostModal }: PostProps & { setPostModal: Function }): JSX.Element {
  return (
    <div className='w-60 h-full rounded-md border shadow-md overflow-hidden'>
      <div className='px-4 pt-4'>
        <h3 className='text-lg font-medium'>{post.title}</h3>
        <div className='relative w-full mx-auto my-2 aspect-[4/3]'>
          <Image src={post.images.length > 0 ? post.images[0].url : '/images/PointWall.png'} alt='Imagen prinicpal' fill className='object-contain' />
        </div>
        <p className='text-sm mt-1'>{post.artType.length > 0 ? post.artType : 'Tipo no especificado'}</p>
        <p className='text-sm mt-1'>Imágenes: {post.images.length}</p>
        <p className='flex items-center gap-2 text-xs my-2'>
          <Image
            src={post.author.image ?? '/images/PointWall.png'}
            alt='Imagen de perfil'
            width={30}
            height={30}
            className='rounded-full'
          />
          {post.author.firstName} {post.author.lastName}
        </p>
      </div>
      <button onClick={() => setPostModal(post)} className='w-full py-1 bg-slate-800 text-white hover:text-slate-200 transition-all'>
        Ver
      </button>
    </div>
  )
}

function PostCardSkeleton (): JSX.Element {
  return (
    <div className='w-60 h-full rounded-md border shadow-md overflow-hidden animate-pulse'>
      <div className='px-4 pt-4'>
        <div className='w-3/4 h-6 bg-gray-300' />
        <div className='w-full mx-auto my-2 aspect-[4/3] bg-gray-200' />
        <div className='w-5/6 h-4 mt-1 bg-gray-300' />
        <div className='w-5/6 h-4 mt-1 bg-gray-300' />
        <div className='flex items-center gap-2 text-xs my-2'>
          <div className='w-8 h-8 rounded-full bg-gray-300' />
          <div className='w-4/5 h-5 bg-gray-300' />
        </div>
      </div>
      <div className='w-full h-8 bg-gray-500' />
    </div>
  )
}

export default function Page (): JSX.Element {
  const [posts, setPosts] = useState<Array<
  Post & {
    author: User
    images: PostImage[]
  }
  >>([])
  const [isLoading, setIsloading] = useState(false)
  const [postModal, setPostModal] = useState(null)

  useEffect(() => {
    async function fetchPosts (): Promise<void> {
      setIsloading(true)
      const response = await fetch('/api/post')
      const data = await response.json()
      setPosts(data.posts)
      setIsloading(false)
    }
    fetchPosts().catch(error => {
      console.error(error)
    })
  }, [])

  useEffect(() => {
    if (postModal !== null) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [postModal])

  console.log(posts.length)
  console.log(isLoading)

  return (
    <AdminLayout title='Solicitudes'>
      <div className='relative'>
        <p>Acá se muestran las solicitudes generadas por usuarios</p>
        {isLoading
          ? <div className='flex flex-wrap gap-4 my-4'>{Array(10).fill(1).map((el, index) => <PostCardSkeleton key={index} />)}</div>
          : posts.length > 0
            ? (
              <div>
                <div className='flex flex-wrap gap-4 my-4'>
                  {posts.map((post, i) => (
                    <PostCard key={post.id} post={post} setPostModal={setPostModal} />
                  ))}
                </div>
                {(postModal != null) && <PostModal post={postModal} setPostModal={setPostModal} />}
              </div>
              )
            : (
              <p>De momento no hay solicitudes de colaboración... {posts.length} asdf</p>
              )}
      </div>
    </AdminLayout>
  )
}
