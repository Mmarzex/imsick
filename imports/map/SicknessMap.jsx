import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class SicknessMap extends Component {
  
  constructor() {
    super();
    
    this.state = {
            //markerData: [],
            zoom: 18,
            current_location: {lat: 40.803797, lng: -77.865486},
            //defaultMarkerData: [{lat: 40.803797, lng: -77.865486, symptoms:[{},{},{}]},{}]}]
        };
  }
  
  componentDidMount() {
    // OBJECTS THAT SHOULD BE IN STATE
    // 'markerData' should be an array of markerData objects, each of which look like this:
    // {lat: 40.803797, lng: -77.865486, symptoms:[{},{},{}]},{}]}
    // 
    // 'zoom' should always be 18. 18 is the closest we can get to the ground. 
    // 
    // 'current_location' should be the current user's current location, we can use this to center on their location to show them 
    // their surroundings
      this.setState({
        //markerData: [], 
        zoom: 18
                    });

    //console.log(Geolocation.currentLocation());
    //console.log('reports', Reports.find({}).fetch());
  }
  
    render() {
      const position = [this.state.current_location.lat, this.state.current_location.lng];
      var temp = [];
      if(this.state.markerData){
        for(var i = 0; i < this.props.markerData.length; i++) 
        {
          var current = this.props.markerData[i];
          var symptomClass = "";
          var symptomsSentence = "";
          
          // Make a classname based on symptoms so that all
          for(var j = 0; j < current.symptoms.length-1; j++)
          {
            symptomClass += current.symptoms[j] + "-";
            symptomsSentence += current.symptoms[j] + "<br/>";
          }
          
          // Add the last symptom to each without a trailing character
          symptomClass+=current.symptoms[current.symptoms.length-1];
          symptomsSentence += current.symptoms[current.symptoms.length-1];
          
          temp.push((
              <Marker className={symptomClass} position={[current.lat,current.long]}>
                <Popup>
                  <span>{symptomsSentence}</span>
                </Popup>
              </Marker>
          ));
        }
        
        return (
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
              url="http://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RvY2tsZXR0IiwiYSI6ImNpbXRodjdkdTAyMG12cWx1bWV3ems4ODMifQ.vQ1RYaU-1rFto4FwZoRPJw"
            />
            {temp}
          </Map>
        );
      } else {
        // Initialize a marker to be on the business building on campus
          return (
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
              url="http://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RvY2tsZXR0IiwiYSI6ImNpbXRodjdkdTAyMG12cWx1bWV3ems4ODMifQ.vQ1RYaU-1rFto4FwZoRPJw"
            />
            <Marker position={position}>
            <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        );
      }
        
        
    }
  
  // look at latLang propType on "https://github.com/PaulLeCam/react-leaflet"
}

SicknessMap.propTypes = {markerData: React.PropTypes.array};
// SicknessMap.defaultProps = {};