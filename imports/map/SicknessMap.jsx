/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace.jsx';

export default class SicknessMap extends Component {

  //shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{key:'AIzaSyAUzYP9lKQJIa2T9F_Auc-Mb3wP0Eowdgo'}} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}

SicknessMap.propTypes = { 
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.any};

SicknessMap.defaultProps = { 
  center: [59.938043, 30.337157],
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}};