import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Business.css'

const Business = () => {
  return (
    <MapContainer center={[-27.5929705,-48.5556297]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Business
