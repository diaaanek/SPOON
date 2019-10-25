import React, { Component } from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';
import SidebarContainer from "../layouts/SidebarContainer.css"

// we used Leaflet map to show a map in our restaurant detail page
class MyMap extends React.Component {
  render() {
    return (
      <Map
        center={[
          this.props.restaurant.coordinates.latitude, this.props.restaurant.coordinates.longitude
        ]}
        zoom={25}
        maxZoom={15}
        attributionControl={true}
				zoomControl={true}
				doubleClickZoom={true}
				scrollWheelZoom={true}
				dragging={true}
				animate={true}
				easeLinearity={0.35}
        >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        <Marker position={[
            this.props.restaurant.coordinates.latitude, this.props.restaurant.coordinates.longitude
        ]}>
          <Popup>
            {this.props.restaurant.name}
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default MyMap
