import { Post } from '@/types/models'

export default function InfoWindow ({ post }: { post: Post }): JSX.Element {
  const infoWindowStyle = {
    bottom: 150,
    left: '-45px',
    maxWidth: 500,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14
  }

  return (
    <div style={infoWindowStyle} className='z-50'>
      <div className='text-sm'>{post.title}</div>
      <div className='text-xs text-gray-500'>@{post.author?.username}</div>
      <div>
        <img src={post.images[0].url} style={{ maxWidth: 500, maxHeight: 200 }} />
      </div>
    </div>
  )
}
