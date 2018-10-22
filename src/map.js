import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import location_user from './location_user.png';
import { RestaurantList } from "./restaurantlist";
import {Navbar} from "./navbar"

 


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
      height: "700px",
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
        zoom={11}
        initialCenter={{ lat: 55.405383, lng: 12.919958}}
        gestureHandling= {'cooperative'}
      >
      <Navbar/>
      <RestaurantList/>
        
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
          title={"Fotevikens Café och Restaurang"}
          position={{ lat: 55.4282, lng: 12.9520 }}
          name={`Fotevikens Café och Restaurang`}
          address={"Museivägen 27, 236 91"}
          phone={"040-330 800"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Delitorget på ICA Toppen"}
          position={{ lat: 55.425826, lng: 12.964215 }}
          name={`Delitorget på ICA Toppen`}
          address={`Kungstorpsvägen 8B, 236 32`}
          phone={"040-453 915"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Caféet i det Gröna"}
          position={{ lat: 55.419850, lng: 12.954818 }}
          name={`Caféet i det Gröna`}
          address={`Falsterbovägen 54, 236 51`}
          phone={"040-453 915"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Vespa"}
          position={{ lat: 55.417900, lng: 12.952494 }}
          name={`Vespa`}
          address={`Falsterbovägen 66, 236 51`}
          phone={"040-450 845"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Höllviken Kött och Grill"}
          position={{ lat: 55.420352, lng: 12.954790 }}
          name={`Höllviken Kött och Grill`}
          address={`Falsterbovägen 65, 236 51`}
          phone={"040-450 404"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Näset by the Sea"}
          position={{ lat: 55.410222, lng: 12.932802 }}
          name={`Näset by the Sea`}
          address={`Västra Hamnplan 1, 236 41`}
          phone={"040-451 778"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Shakespeare Pub"}
          position={{ lat: 55.417738, lng: 12.951353 }}
          name={`Shakespeare Pub`}
          address={`Falsterbovägen 83, 236 51`}
          phone={"040-450 486"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Gateau"}
          position={{ lat: 55.420089, lng: 12.955317 }}
          name={`Gateau`}
          address={`Falsterbovägen 50, 236 51`}
          phone={"040-666 9905"}
        />

        <Marker
          onClick={this.onMarkerClick}
          title={"Smakverkeri"}
          position={{ lat: 55.414715, lng: 12.859918 }}
          name={`Smakverkeri`}
          address={`Valthornsgatan, Skanör 239 31`}
          phone={"0735 25 82 81"}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <MuiThemeProvider>
            <Paper>
              <h4 variant="headline">{this.state.selectedPlace.name}</h4>
              <p className="infowindowtext">
                {this.state.selectedPlace.address}
                <br />
                {this.state.selectedPlace.phone}
                <br />
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
  