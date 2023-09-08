import React, { createRef, useEffect, useState } from 'react'
const Wrapper = (props: any): JSX.Element => (
  <div {...props} />
)

export default function LocationSearcher ({ map, mapsApi, className }: {
  map: google.maps.Map<Element> | google.maps.Map<Element> & {
    zoom: number
  }
  mapsApi: typeof google.maps
  className?: string
}): JSX.Element {
  const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete>()
  const searchInput = createRef<HTMLInputElement>()
  const onPlaceChanged = (gmaps = map): void => {
    const place = autoComplete?.getPlace()
    if (place?.geometry == null) return
    if (place?.geometry?.viewport != null) {
      gmaps.fitBounds(place.geometry.viewport)
    } else {
      gmaps.setCenter(place.geometry.location)
      gmaps.setZoom(17)
    }
    console.log({ place })
    searchInput.current?.blur()
  }

  const handleClearSearchBox = (): void => {
    if (searchInput.current === null) return
    searchInput.current.value = ''
  }
  useEffect(() => {
    if (searchInput.current === null) return
    const auto = new mapsApi.places.Autocomplete(searchInput.current)
    auto.addListener('place_changed', onPlaceChanged)
    auto.bindTo('bounds', map)
    setAutoComplete(auto)
    return () => {
      console.log('Unmounting FunctionalComponent')
      mapsApi.event.clearInstanceListeners(searchInput)
    }
  }, [])
  return (
    <Wrapper>
      <input
        ref={searchInput}
        type='text'
        className={className ?? ''}
        onFocus={handleClearSearchBox}
        placeholder='Buscá una ubicación'
      />
    </Wrapper>
  )
}
