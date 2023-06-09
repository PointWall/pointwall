import { useState } from 'react'
import { Post, data } from '@/lib/fakeData'
import AutoComplete from '@/components/map/AutoComplete'
import FocusedPost from '@/components/map/FocusedPost'
import GoogleMap from 'google-maps-react-markers'
import Marker from '@/components/map/Marker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

export default function Page (): JSX.Element {
  const [mapState, setMapState] = useState<{
    mapReady: boolean
    mapInstance: google.maps.Map<Element> & {
      zoom: number
    } | null
    mapApi: any
  }>({
    mapReady: false,
    mapInstance: null,
    mapApi: null
  })
  const [markers, setMarkers] = useState<Post[]>(data)
  const [focusedPost, setFocusedPost] = useState<Post | null>(null)
  function onGoogleApiLoaded ({
    map,
    maps
  }: {
    map: google.maps.Map<Element> & { zoom: number }
    maps: any
  }): void {
    setMapState({
      mapInstance: map,
      mapApi: maps,
      mapReady: true
    })
  }

  function onMarkerClick (post: Post): void {
    if (mapState.mapInstance == null) return
    setFocusedPost(post)
  }

  function onMapChange (map: any): void {
    // Render only markers in the current view
    if (map == null) return
    const bounds = map.bounds
    if (bounds == null) return
    const ne = bounds.getNorthEast() // LatLng of the north-east corner
    const sw = bounds.getSouthWest() // LatLng of the south-west corder
    setMarkers(
      map.zoom > 3
        ? data.filter((item) => {
          return (
            item.lat > sw.lat() &&
              item.lat < ne.lat() &&
              item.lng > sw.lng() &&
              item.lng < ne.lng()
          )
        })
        : data
    )
  }

  return (
    <div
      className='google-map'
      style={{ margin: 0, height: '100vh', width: '100%' }}
    >
      {mapState.mapReady
        ? (
          <section>
            <Link
              href='/'
              className='align-center absolute z-20 ml-2.5 mt-2.5 flex -rotate-90 transform cursor-pointer items-center justify-center rounded-xl border-black bg-gray-100 p-3 text-xs shadow-lg transition duration-300 hover:scale-105 hover:bg-white hover:shadow-xl'
            >
              <FontAwesomeIcon icon={faLevelUpAlt} />
            </Link>
            <div className='absolute left-3 top-3 z-10'>
              <div className='space-y-10'>
                <div className='flex transform flex-wrap items-center gap-2 rounded-xl bg-white p-6 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl md:gap-4'>
                  <div className='flex w-full items-center rounded-lg bg-gray-100 p-3 text-sm md:w-fit md:p-4 md:text-base'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 opacity-30'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                    <AutoComplete
                      map={mapState.mapInstance}
                      mapApi={mapState.mapApi}
                    />
                  </div>
                  <div className='duration-3000 w-full cursor-pointer rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:shadow-lg md:w-fit md:text-base'>
                    <span>Buscar</span>
                  </div>
                </div>
                {focusedPost != null && (
                  <FocusedPost
                    close={() => setFocusedPost(null)}
                    post={focusedPost}
                  />
                )}
              </div>
            </div>
          </section>
          )
        : (
          <div className='h-screen w-screen animate-pulse grid place-content-center place-items-center'>
            <div className='relative h-32 w-32 border-2 border-blak rounded-full'>
              <Image src='/images/PointWall.png' alt='logo pointwall' fill />
            </div>
            <p className='text-xl font-medium'>Cargando mapa...</p>
          </div>
          )}
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
          libraries: ['places', 'geometry']
        }}
        defaultCenter={{ lng: -58.421763, lat: -34.6562639 }}
        defaultZoom={12}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChildMouseEnter={() => console.log(true)}
        options={{
          mapTypeControl: false,
          fullscreenControl: false,
          maxZoom: 20,
          minZoom: 3,
          rotateControl: false,
          scaleControl: false,
          streetViewControl: true,
          mapType: 'hybrid',
          zoomControl: true,
          hoverDistance: 40 / 2
        }}
        hoverDistance={40 / 2}
        onChange={onMapChange}
      >
        {markers.map((post: Post, index: number) => {
          return (
            <Marker
              size={mapState?.mapInstance?.zoom !== undefined ? mapState?.mapInstance?.zoom >= 15 ? 'sm' : 'md' : 'md'}
              lat={post.lat}
              lng={post.lng}
              key={index}
              post={post}
              onClick={() => onMarkerClick(post)}
            />
          )
        })}
      </GoogleMap>
    </div>
  )
}
