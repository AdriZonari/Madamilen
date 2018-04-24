import {Map, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


export class MapContainer extends Component {

    loadMap() {
        if (this.props && this.props.google) {
          // google is available
          const {google} = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
          const node = ReactDOM.findDOMNode(mapRef);

        let zoom = 14;
        let lat = 37.774929;
        let lng = -122.419416;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
        }
    }

componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
      }

  render() {
    
    if (!this.props.loaded){
    return (<div ref='map'>Loading...</div> )  
    }
    const style = { width : '100vw',
                  height: '100vh'
    }
    return (
        <div style={style}>
        <Map google={this.props.google} />
        </div>    
        )
    }
}
 
export default GoogleApiWrapper({
  apiKey : "AIzaSyAk9nBuXiuBcbnY9VP8bFWrJs30MM0eINM"
})(MapContainer)