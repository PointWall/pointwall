import { Post } from '@/types/models'
import Image from 'next/image'

interface FocusedPostProps {
  close: () => void
  post: Post
}

export default function FocusedPost ({ close, post }: FocusedPostProps): JSX.Element {
  return (
    <div className='max-w-xs container bg-white rounded-md shadow-lg'>
      <div>
        {
          post?.tags?.map((tag) => (
            <span key={tag} className='text-white text-xs font-bold rounded-md bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer'>
              {tag}
            </span>
          ))
        }
        <button
          onClick={close}
          className='hover:bg-slate-400 transition-all text-white text-xs font-bold rounded-md m-2 bg-slate-300 inline-block py-1.5 px-3 cursor-pointer float-right active:brightness-90 active:shadow-lg'
        >
          X
        </button>
        <h1 className='text-2xl py-2 ml-4 font-bold text-gray-800 hover:text-gray-900 transition duration-100'>
          {post.title ?? 'Sin título'}
        </h1>
      </div>
      <Image
        className='w-full cursor-pointer'
        src={post.images[0].url}
        alt='post_image'
        width={400}
        height={500}
      />
      <div className='flex p-3 justify-between'>
        <div className='flex items-center space-x-2'>
          <Image
            className='w-10 rounded-full'
            src={post.author.avatar ?? 'images/avatar-default.webp'}
            alt={post.author.username}
            height={35}
            width={35}
          />
          <h2 className='text-gray-800'>
            @{post.author.username}
          </h2>
        </div>
      </div>
    </div>
  )
}
