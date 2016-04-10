import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, setIconDefaultImagePath} from 'react-leaflet';
import {Meteor} from 'meteor/meteor';
import {Reports} from '../api/Reports';

var intervalId;
export default class SicknessMap extends Component {

    constructor() {

        super();
        this.state = {
            //markerData: [],
            zoom: 18,
            current_location: {lat: 40.803797, lng: -77.865486},
            defaultMarkerData: [{lat: 40.803554, lng: -77.865521, symptoms:["Diahrea","Itchy dick","Bloody pee"]},
                {lat: 40.803952, lng: -77.864703, symptoms:["Diahrea","Itchy dick","Bloody pee"]},
                {lat: 40.803942, lng: -77.865191, symptoms:["Diahrea","Itchy dick","Bloody pee"]}]};
      
      setIconDefaultImagePath('http://i.imgur.com/Z97abFM.png');
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
        intervalId = Meteor.setInterval(() => {
            console.log('inverval');
            this.setState({
                markerData: Reports.find({}).fetch()
            });
        }, 3000);
        this.setState({
            // markerData: Reports.find({}).fetch(),
            //markerData: [],
            zoom: 18
        });

        //console.log(Geolocation.currentLocation());
        //console.log('reports', Reports.find({}).fetch());
    }

    render() {
        const position = [this.state.current_location.lat, this.state.current_location.lng];
        var temp;

        if(this.state.markerData || this.state.defaultMarkerData){
            var data;
            var isReportData = false;
            if(this.state.markerData){
                data = this.state.markerData;
                Meteor.clearInterval(intervalId);
                isReportData = true;
            }else{
                data = this.state.defaultMarkerData;
            }

            temp = data.map((m, i) => {
                if(isReportData) {
                    var symptoms = m.symptoms.map(k => {
                        return k.text;
                    });
                    return (
                        <Marker key={i} className={symptoms.join('-')} position={[m.lat,m.lng]}>
                            <Popup>
                                <span>{symptoms.join(', ')}</span>
                            </Popup>
                        </Marker>
                    );
                    console.log(symptoms.join(', '));
                }
                return (
                    <Marker key={i} className={m.symptoms.join('-')} position={[m.lat,m.lng]}>
                        <Popup>
                            <span>{m.symptoms.join(', ')}</span>
                        </Popup>
                    </Marker>
                );
            });

            // for(var i = 0; i < data.length; i++)
            // {
            //     var current = data[i];
            //     var symptomClass = "";
            //     var symptomsSentence = "";
            //
            //     // Make a classname based on symptoms so that all
            //     for(var j = 0; j < current.symptoms.length-1; j++)
            //     {
            //         symptomClass += current.symptoms[j] + "-";
            //         symptomsSentence += current.symptoms[j] + ", ";
            //     }
            //
            //     // Add the last symptom to each without a trailing character
            //     symptomClass+=current.symptoms[current.symptoms.length-1];
            //     symptomsSentence += current.symptoms[current.symptoms.length-1];
            //
            //     temp.push((
            //         <Marker key={i} className={symptomClass} position={[current.lat,current.lng]}>
            //             <Popup>
            //                 <span>{symptomsSentence}</span>
            //             </Popup>
            //         </Marker>
            //     ));
            // }

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