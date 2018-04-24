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

    componentDidMount() {
      this.loadMap();
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google) {
        this.loadMap();
      }
    }


  render() {
    
    const style = { width : '100vw',
                  height: '100vh'
    }
    return (
       <div ref='map'>Laddar kartan...</div>,
        <div >
        <Map google={this.props.google}
              style={style} />
        </div>    
        )
    }
}
 
export default GoogleApiWrapper({
  apiKey : "AIzaSyAk9nBuXiuBcbnY9VP8bFWrJs30MM0eINM"
})(MapContainer)