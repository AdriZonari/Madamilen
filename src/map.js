import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import location_user from './location_user.png';
 


class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
   
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      })
      return this.state;
    });
  }

  render() {

   const style = {
      width: "100",
      height: "100",
      marginLeft: "auto",
      marginRight: "auto"
    };

    let location = {lat: this.state.lat, lng: this.state.lng}


    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={14}
        initialCenter={{ lat: 55.60587, lng: 13.00073}}
        gestureHandling= {'cooperative'}
      >
        
        <Marker 
          icon={location_user}
          onClick={this.onMarkerClick}
          title={"Du är här"}
          position={{lat: location.lat,
                    lng: location.lng}}
          name={`Du är här`}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Grand Hotel"}
          position={{ lat: 55.703833, lng: 13.189417 }}
          name={`Grand Hotel`}
          address={"Bantorget 1, 222 29"}
          phone={"046-280 61 00"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Malmstens Fisk & Kök"}
          position={{ lat: 55.701538, lng: 13.193845 }}
          name={`Malmstens Fisk och Kök`}
          address={`Västra Mårtensgatan 9, 223 51`}
          phone={"046-12 63 54"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <MuiThemeProvider>
            <Paper>
              <h4 variant="headline">{this.state.selectedPlace.name}</h4>
              <p>
                {this.state.selectedPlace.address}
                <br />
                {this.state.selectedPlace.phone}
              </p>
            </Paper>
          </MuiThemeProvider>{" "}
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyChp6lpBy8QtrTlHuIzPoRSTY7eoTZVRuA"
})(GoogleMapsContainer);
  