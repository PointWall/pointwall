import { Post } from '@/lib/fakeData'

export default function FocusedPost ({
  close,
  post
}: {
  close: () => void
  post: Post
}): JSX.Element {
  return (
    <div className='max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
      <div>
        <button
          onClick={close}
          className='hover:bg-red-900 transition-all text-white text-xs font-bold rounded-lg m-2 bg-red-500 inline-block py-1.5 px-4 cursor-pointer float-right active:brightness-90 active:shadow-lg'
        >
          X
        </button>
        <h1 className='text-2xl py-2 ml-4 font-bold text-gray-800 hover:text-gray-900 transition duration-100'>
          {post.title !== undefined ? post.title : 'Sin título'}
        </h1>
      </div>
      <img
        className='w-full'
        src={post.images}
        alt='post_image'
      />
      <div>
        {
          post?.tags?.map((tag) => (
            <span key={tag} className='text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4'>
              {tag}
            </span>
          ))
        }
      </div>
      <div className='flex p-4 justify-between'>
        <div className='flex items-center space-x-2'>
          <img
            className='w-10 rounded-full'
            src='/images/PointWall.png'
            alt='Imagen de usuario'
          />
          <h2 className='text-gray-800 text-sm'>
            cartocolab@gmail.com
            {/* {post.author?.email} */}
          </h2>
        </div>
        {/* <div className='flex space-x-2'>
          <div className='flex space-x-1 items-center'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span>20</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
