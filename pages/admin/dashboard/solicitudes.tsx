import AdminLayout from '@/components/AdminLayout'
// import { prisma } from '@/lib/db'
import Image from 'next/image'
import { Post, User, Image as PostImage } from '@prisma/client'
import { useEffect, useState } from 'react'

interface PostProps {
  post: Post & { author: User, images: PostImage[] }
}

function PostModal ({ post, setPostModal }: PostProps & { setPostModal: Function }): JSX.Element {
  return (
    <div className='fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0'>
      <div className='animate-[slideUp_.5s_ease] w-full h-full'>
        <div className='fixed w-3/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-white shadow-lg border rounded-lg'>
          <button onClick={() => setPostModal(null)} className='absolute top-0 right-0 m-4 px-2 border border-gray-300 rounded-md text-gray-500 hover:shadow-lg active:scale-95 transition-shadow'>
            x
          </button>
          <h2 className='text-4xl mb-4 font-semibold'>{post.title}</h2>
          <div className='flex gap-2'>
            {post.images.length > 0 ? post.images.map((image) => (<Image key={image.url} src={image.url} alt='Imagen subida' width={100} height={100} />)) : <div className='w-[100px] h-[100px] bg-gray-300 after:content-["Sin_imagen"]' />}
          </div>
          <div className='my-4'>
            <p className='text-sm'>Descripción</p>
            <p className='text-lg'>{post.description ?? 'Sin descripción'}</p>
          </div>
          <div className='flex gap-8 my-4'>
            <div>
              <p className='text-sm'>Tipo de arte</p>
              <h3 className='text-xl'>{post.artType.length > 0 ? post.artType : '-'}</h3>
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
              Aprobar
            </button>
            <button className='p-2 text-yellow-500 border border-yellow-500 rounded-md hover:shadow-[0px_0px_0px_4px] transition-shadow'>
              Modificar
            </button>
            <button className='p-2 text-red-500 border border-red-500 rounded-md hover:shadow-[0px_0px_0px_4px] transition-shadow'>
              Desaprobar
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
  const POSTS_LIMIT = 4
  const [postsSkip, setPostsSkip] = useState(0)
  const [posts, setPosts] = useState<Array<
  Post & {
    author: User
    images: PostImage[]
  }
  >>([])
  const [isLoading, setIsloading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [postModal, setPostModal] = useState(null)

  async function fetchPosts (): Promise<void> {
    setIsloading(true)
    const response = await fetch('/api/post?' + new URLSearchParams({
      skip: postsSkip.toString(),
      limit: POSTS_LIMIT.toString()
    }).toString())
    console.log('RESPONSE', response)
    if (!response.ok) {
      setErrorMessage(response.statusText)
      setIsloading(false)
      return
    }
    const data = await response.json()
    if (data.error !== undefined) {
      setErrorMessage(data.error)
    } else {
      setPosts((prevPosts) => [...prevPosts, ...data.posts])
      setPostsSkip(postsSkip + 4)
    }
    setIsloading(false)
  }

  function handleLoadMoreClick (): void {
    fetchPosts().catch(console.error)
  }

  useEffect(() => {
    fetchPosts().catch(error => {
      console.error(error)
      setErrorMessage(error.message)
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
        {isLoading && posts.length === 0
          ? (
            <div className='flex flex-wrap gap-4 my-4'>
              {Array(POSTS_LIMIT).fill(1).map((el, index) => <PostCardSkeleton key={index} />)}
            </div>
            )
          : (errorMessage !== null)
              ? <p className='mt-4 font-medium bg-red-100 text-red-600 rounded-lg p-4 w-fit'><span className='font-bold border-2 border-red-600 rounded-full w-6 h-6 inline-grid place-content-center'>!</span> Error: {errorMessage}</p>
              : posts.length > 0
                ? (
                  <div>
                    <div className='flex flex-wrap gap-4 my-4'>
                      {posts.map((post, i) => (
                        <PostCard key={post.id} post={post} setPostModal={setPostModal} />
                      ))}
                    </div>
                    {isLoading && (
                      <div className='flex flex-wrap gap-4 my-4'>
                        {Array(POSTS_LIMIT).fill(1).map((el, index) => <PostCardSkeleton key={index} />)}
                      </div>
                    )}
                    {(postModal != null) && <PostModal post={postModal} setPostModal={setPostModal} />}
                  </div>
                  )
                : (
                  <p>De momento no hay solicitudes de colaboración...</p>
                  )}
      </div>
      <button onClick={handleLoadMoreClick} disabled={errorMessage !== null} className='w-fit block mx-auto p-2 text-white bg-slate-800 rounded-md hover:brightness-90 transition-all disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:bg-slate-200'>Cargar más</button>
    </AdminLayout>
  )
}
