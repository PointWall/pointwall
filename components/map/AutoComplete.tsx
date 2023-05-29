import React, { Component } from 'react'

const Wrapper = (props: any): JSX.Element => (
  <div
    style={
      {}
      /* {
      position: "absolute",
      top: "10px",
      left: "15%",
      borderColor: "black",
      transform: "translate(-50%, 0)",
      zIndex: 10,
      width: "400px",
    } */
    }
    {...props}
  />
)

class AutoComplete extends Component {
  this: any
  autoComplete: any
  searchInput: any
  props: any

  constructor (props: any) {
    super(props)
    this.handleClearSearchBox = this.handleClearSearchBox.bind(this)
  }

  componentDidMount ({ map, mapApi } = this.props): void {
    this.autoComplete = new mapApi.places.Autocomplete(this.searchInput)
    this.autoComplete.addListener('place_changed', this.onPlaceChanged)
    this.autoComplete.bindTo('bounds', map)
  }

  componentWillUnmount ({ mapApi } = this.props): void {
    mapApi.event.clearInstanceListeners(this.searchInput)
  }

  onPlaceChanged = ({ map } = this.props): void => {
    const place = this.autoComplete.getPlace()
    if (place?.geometry == null) return
    if (place?.geometry?.viewport != null) {
      map.fitBounds(place.geometry.viewport)
    } else {
      map.setCenter(place.geometry.location)
      map.setZoom(17)
    }
    this.searchInput.blur()
  }

  handleClearSearchBox (): void {
    this.searchInput.value = ''
  }

  render (): JSX.Element {
    return (
      <Wrapper>
        <input
          ref={(ref) => {
            this.searchInput = ref
          }}
          type='text'
          className='bg-gray-100 outline-none'
          onFocus={this.handleClearSearchBox}
          placeholder='Busca una ubicacion'
        />
      </Wrapper>
    )
  }
}

export default AutoComplete
