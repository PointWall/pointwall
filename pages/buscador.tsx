import { FormEvent, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { API_URL } from '@/lib/constants'
import { Post } from '@/types/models'
import { faMapMarkerAlt, faCalendarAlt, faFlag } from '@fortawesome/free-solid-svg-icons'
// components
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Title, Wrapper } from '@/components/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function PostModal ({ post, setPostModal }: { post: Post, setPostModal: Function }): JSX.Element {
  const [imageReady, setImageReady] = useState(false)

  return (
    <div className='fixed block w-screen h-screen z-50 top-0 left-0 bg-black bg-opacity-50'>
      <div className='absolute w-full max-w-3xl inset-0 m-auto h-fit rounded-md overflow-hidden bg-white animate-fade-up'>
        <h3 className='text-xl py-4 px-2 md:px-10 text-center'>{post.title.length > 0 ? post.title : 'Sin título'}</h3>
        <div className='bg-gradient-to-r from-white via-gray-300 to-white'>
          <div className='relative w-2/3 aspect-[4/3] mx-auto rounded-md overflow-hidden'>
            <Image
              src={post.images[0].url}
              alt={post.images[0].url}
              className={`object-contain ${imageReady ? '' : 'animate-pulse'}`}
              fill
              placeholder='blur'
              blurDataURL='/images/PointWall.png'
              onLoadingComplete={() => setImageReady(true)}
            />
          </div>
        </div>
        <div className='m-4 md:mx-8'>
          <h4 className='text-sm text-gray-500'>Descripción</h4>
          <p>{post.content ?? ''}</p>
        </div>
        <div className='m4 md:mx-8'>
          <h4 className='text-sm text-gray-500'>Colaboración de</h4>
          <p className='flex gap-2 items-center mt-1'>
            <span className='w-8 h-8 inline-flex items-center justify-center'>
              <Image src={post.author.avatar ?? '/images/avatar-default.webp'} alt={post.author.username} width={30} height={30} className='border rounded-full overflow-hidden' />
            </span>
            <span>{post.author.username}</span>
          </p>
        </div>
        <div className='m-4 md:mx-8 space-y-2'>
          <p className='flex gap-2 items-center'>
            <span className='w-8 h-8 inline-flex items-center justify-center'>
              <FontAwesomeIcon icon={faCalendarAlt} className='w-5 h-5 text-gray-600' />
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString('es-AR')}</span>
          </p>
          <p className='flex gap-2 items-center'>
            <span className='w-8 h-8 inline-flex items-center justify-center'>
              <FontAwesomeIcon icon={faFlag} className='w-5 h-5 text-gray-600' />
            </span>
            <span>{post.location.country}</span>
          </p>
          <p className='flex gap-2 items-center'>
            <span className='w-8 h-8 inline-flex items-center justify-center'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='w-5 h-5 text-gray-600' />
            </span>
            <span>{post.location.name}</span>
          </p>
        </div>
        <button type='button' onClick={() => setPostModal(null)} className='block py-0.5 px-2 m-1 rounded-md bg-gray-200 absolute top-0 right-0 hover:bg-gray-300 transition-colors'>X</button>
      </div>
    </div>
  )
}

function PostCard ({ post, setPostModal }: { post: Post, setPostModal: Function }): JSX.Element {
  return (
    <div className='w-full max-w-xs h-fit border rounded-md hover:shadow-lg hover:scale-[102%] transition-all duration-300'>
      <div className='p-2 text-center'>
        <h3>{post.title.length > 0 ? post.title : 'Sin título'}</h3>
      </div>
      <div className='relative cursor-pointer group'>
        <span onClick={() => setPostModal(post)} className='absolute w-full h-full opacity-0 text-white bg-black bg-opacity-50 top-0 left-0 group-hover:opacity-100 flex items-center justify-center transition-all'>
          Expandir
        </span>
        <Image
          src={post.images[0].url}
          alt={post.images[0].url}
          width={320}
          height={320}
          className='w-full'
          placeholder='blur'
          blurDataURL='/images/PointWall.png'
        />
      </div>
      <div className='p-2'>
        <p className='flex gap-2 items-center'>
          <span className='text-lg'><FontAwesomeIcon icon={faMapMarkerAlt} className='text-gray-400' /></span>
          <span className='text-xs line-clamp-1 text-gray-700'>
            {post.location.name ?? ''}
          </span>
        </p>
      </div>
    </div>
  )
}

function PostCardSkeleton (): JSX.Element {
  return (
    <div className='w-full max-w-xs h-fit border rounded-md animate-pulse'>
      <div className='p-3 text-center'>
        <div className='h-4 w-1/3 mx-auto bg-gray-300 rounded-full' />
      </div>
      <div className='w-full aspect-[4/3] bg-gray-300' />
      <div className='p-2'>
        <p className='flex gap-2 items-center'>
          <span className='text-lg'><FontAwesomeIcon icon={faMapMarkerAlt} className='text-gray-400' /></span>
          <span className='inline-block w-2/3 bg-gray-300 h-4 rounded-full' />
        </p>
      </div>
    </div>
  )
}

export default function Page (): JSX.Element {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [skip, setSkip] = useState(0)
  const [posts, setPosts] = useState<Post[]>([])
  const [postModal, setPostModal] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  // const [inputState, setInputState] = useState('')

  function handleFormSubmit (ev: FormEvent): void {
    ev.preventDefault()
    async function fetchPost (): Promise<any> {
      const res = await fetch(`${API_URL}/posts?includeImages=true&includeAuthor=true&includeLocation=true&take=15&skip=${skip.toString()}`)
      const posts = await res.json()
      setIsLoading(false)
      console.log(posts)
      setPosts(posts)
      setSkip(v => v + 15)
    }
    setIsLoading(true)
    fetchPost().catch(console.log)
  }

  useEffect(() => {
    async function fetchPost (): Promise<any> {
      const res = await fetch(`${API_URL}/posts?includeImages=true&includeAuthor=true&includeLocation=true&take=15`)
      setIsLoading(false)
      const posts = await res.json()
      console.log(posts)
      setPosts(posts)
      setSkip(v => v + 15)
    }
    setIsLoading(true)
    fetchPost().catch(console.log)
  }, [])

  return (
    <>
      <Head>
        <title>Explorar</title>
      </Head>
      <Layout color='orange'>
        <Wrapper>
          <section
            className={`text-center ${inView ? 'animate-fade-down' : ''}`}
            ref={ref}
          >
            <Title>¡Explorá!</Title>
            <p className='mx-auto my-[1.25em] max-w-prose md:text-2xl'>
              ¡Explorá el arte de todas partes del mundo! Si estás buscando compartir arte,
              te invitamos a que a que lo hagas a través del{' '}
              <Link
                href='/contribucion'
                className='text-red-300 hover:underline'
              >
                formulario de contriubción
              </Link>
              .
            </p>
          </section>
          <section>
            <form
              onSubmit={handleFormSubmit}
              className='css-searcher relative mx-auto my-8 flex w-fit flex-wrap justify-center overflow-hidden rounded-md border'
            >
              {/* <input
                onChange={(e) => {
                  setInputState(e.target.value)
                }}
                value={inputState}
                type='text'
                placeholder='Buscar...'
                className='bg-slate-50 p-2 outline-none md:text-xl'
              /> */}
              <button
                type='submit'
                className='bg-slate-200 px-[1em] py-[.5em] hover:brightness-95 active:brightness-90 md:text-xl'
              >
                Cargar más
              </button>
              <span className='css-searcher-separator hidden md:block' />
            </form>
          </section>
          <section className='my-16'>
            {/* <h2 className='my-4 text-xl text-center font-semibold md:text-4xl'>
              Resultados
            </h2> */}
            <div className='flex flex-wrap justify-center gap-4'>
              {isLoading
                ? new Array(15).fill(1).map((_, i) => <PostCardSkeleton key={i} />)
                : posts.length > 0
                  ? posts.map((post) => <PostCard key={post.id} post={post} setPostModal={setPostModal} />)
                  : <p>No se encontraron publicaciones que coincidan con los criterios de búsqueda</p>}
            </div>
          </section>
        </Wrapper>
      </Layout>
      {postModal !== null ? <PostModal post={postModal} setPostModal={setPostModal} /> : <></>}
    </>
  )
}
