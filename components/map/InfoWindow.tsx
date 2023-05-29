import { Post } from '@/lib/fakeData'

export default function InfoWindow ({ post }: { post: Post }): JSX.Element {
  const infoWindowStyle = {
    bottom: 150,
    left: '-45px',
    maxWidth: 500,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 5000
  }

  return (
    <div style={infoWindowStyle}>
      <div className='text-lg'>{}</div>
      <div style={{ fontSize: 16 }}>{post.title}</div>
      <div style={{ fontSize: 14 }}>
        {(post.author != null) &&
          <span style={{ color: 'grey' }}>{`${post.author?.firstName} ${post.author?.lastName}`}</span>}
      </div>
      <div className=''>
        <img src={post.images} style={{ maxWidth: 500, maxHeight: 200 }} />
      </div>
    </div>
  )
}
