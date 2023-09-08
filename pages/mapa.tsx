import { useState } from 'react'
import { Post, data } from '@/lib/fakeData'
import LocationSearcher from '@/components/map/LocationSearcher'
import FocusedPost from '@/components/map/FocusedPost'
import GoogleMap from 'google-maps-react-markers'
import Marker from '@/components/map/Marker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Page (): JSX.Element {
  const [mapState, setMapState] = useState<{
    mapReady: boolean
    mapInstance: google.maps.Map<Element> & {
      zoom: number
    } | null
    mapApi: typeof google.maps | null
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
    <>
      <Head>
        <title>Mapa</title>
      </Head>
      <div
        className='google-map'
        style={{ margin: 0, height: '100vh', width: '100%' }}
      >
        {mapState.mapReady
          ? (
            <section>
              <Link
                href='/'
                className='align-center absolute z-20 right-4 top-4 flex gap-2 transform cursor-pointer items-center justify-center rounded-xl border-black bg-gray-100 p-3 text-xs shadow-lg transition duration-300 hover:scale-105 hover:bg-white hover:shadow-xl'
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Volver</span>
              </Link>
              <div className='absolute z-10 top-4 left-4 flex transform flex-wrap items-center gap-2 rounded-xl bg-white p-4 shadow-lg transition duration-500 hover:scale-[102%] hover:shadow-xl md:gap-4'>
                <div className='flex w-full items-center rounded-lg bg-gray-100 text-sm md:w-fit md:text-base'>
                  {mapState.mapInstance != null && mapState.mapApi != null && (
                    <LocationSearcher
                      map={mapState.mapInstance}
                      mapsApi={mapState.mapApi}
                      className='bg-gray-100 ml-2 outline-none p-2'
                    />)}
                  <button className='py-2 px-3 bg-slate-200 rounded-r-md hover:bg-slate-300 active:bg-slate-400'>
                    <FontAwesomeIcon icon={faSearch} className='text-slate-600' />
                  </button>
                </div>
                {/* <div className='duration-3000 w-full cursor-pointer rounded-lg bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:shadow-lg md:w-fit md:text-base'>
                  <span>Buscar</span>
                </div> */}
              </div>
              {focusedPost != null && (
                <div className='absolute z-10 top-28 left-4 hover:scale-[102%] hover:shadow-2xl transition-all duration-500'>
                  <FocusedPost
                    close={() => setFocusedPost(null)}
                    post={focusedPost}
                  />
                </div>
              )}
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
    </>
  )
}
