import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
var map = (<Map center={position} zoom={13}>
  <TileLayer
    url="http://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RvY2tsZXR0IiwiYSI6ImNpbXRodjdkdTAyMG12cWx1bWV3ems4ODMifQ.vQ1RYaU-1rFto4FwZoRPJw"
    attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
  />
  <Marker position={position}>
    <Popup>
      <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
    </Popup>
  </Marker>
</Map>
          );

//render(map, $(document).ready(function(){document.getElementById('render-target')}));

export default class SicknessMap extends Component {
    render() {
        return (
          <div>
          {map}
          </div>
          );
    }
}