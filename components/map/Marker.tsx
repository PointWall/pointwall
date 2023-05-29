import { useState } from 'react'
import InfoWindow from './InfoWindow'
import { Post } from '@/lib/fakeData'

export default function Marker ({ onClick, post }: { onClick: () => any, post: Post, lat: number, lng: number }): JSX.Element {
  const [hover, setHover] = useState(false)
  const K_SIZE = 40
  const greatPlaceStyle = {
    position: 'absolute',
    width: K_SIZE,
    height: K_SIZE,
    left: -K_SIZE / 2,
    top: -K_SIZE / 2,
    border: '5px solid #f44336',
    borderRadius: K_SIZE,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'pointer',
    zIndex: -1
  }

  const greatPlaceStyleHover = {
    ...greatPlaceStyle,
    border: '5px solid #3f51b5',
    color: '#f44336'
  }
  const style = hover ? greatPlaceStyleHover : greatPlaceStyle
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover && post != null && <InfoWindow post={post} />}
      <div style={style as any} />
    </div>
  )
}
