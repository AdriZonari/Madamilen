import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: "100",
      height: "100",
      marginLeft: "auto",
      marginRight: "auto"
    };
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 55.7047, lng: 13.191 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Grand Hotel"}
          position={{ lat: 55.7039, lng: 13.189 }}
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
  