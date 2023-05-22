import React from 'react'
import GoogleMapReact from 'google-map-react'
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const TestComponent = ({ text }: {text: string}) => <div>{text}</div>;
const Map = () => (

  <div className="" > 
    <div className="google-map" style={{ height: '35vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
        defaultCenter={location}
        defaultZoom={18}
      >
        
        <TestComponent
           lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />        
        
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;