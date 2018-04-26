import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import if_Marker_66990 from './if_Marker_66990.png';


const AnyReactComponent = ({ text, img }) => <div>{text},{img}</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.866667,
      lng: 12.833333
    },
    zoom: 11,
    text: "Landskrona",
    language: "sv",
    region: "sv"
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAk9nBuXiuBcbnY9VP8bFWrJs30MM0eINM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={55.90456}
            lng={12.80880}
            text={'Erikstorps Kungsgård'}>
            <img src={if_Marker_66990}w10 alt=""/>
          </AnyReactComponent>
        </GoogleMapReact>
      </div>
    );

  }

}

export default SimpleMap; 
