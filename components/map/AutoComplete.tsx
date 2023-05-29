import React, { Component } from "react";

const Wrapper = (props: any) => (
  <div
    style={
      {}
      /*{
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
);

class AutoComplete extends Component {
  this: any;
  autoComplete: any;
  searchInput: any;
  props: any;

  constructor(props: any) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    this.autoComplete = new mapApi.places.Autocomplete(this.searchInput);
    this.autoComplete.addListener("place_changed", this.onPlaceChanged);
    this.autoComplete.bindTo("bounds", map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map } = this.props) => {
    const place = this.autoComplete.getPlace();
    if (!place || !place?.geometry) return;
    if (place?.geometry?.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = "";
  }

  render() {
    return (
      <Wrapper>
        <input
          ref={(ref) => {
            this.searchInput = ref;
          }}
          type="text"
          className="bg-gray-100 outline-none"
          onFocus={this.clearSearchBox}
          placeholder="Busca una ubicacion"
        />
      </Wrapper>
    );
  }
}

export default AutoComplete;
