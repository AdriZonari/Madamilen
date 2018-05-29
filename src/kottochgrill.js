import React from 'react';
import logotyp_png from './logotyp_png.png'
import {Navbar} from "./navbar";
import prickar_png from './prickar_png.png'


const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="358" height="64" className="Madamilen-logo" alt="logo" />
        </header>



export class Kottochgrill extends React.Component {
    render() {
      return (

        <div>
        <AppHeader/>
        <div className="background">
        <div  className="RestaurantInfo">
        <h1>Meny</h1>
        <img className="prickar" src={prickar_png} width="250" height="22" alt="prickar" />
        <p>"grillfest"</p>
        <h2><a href="http://hollvikenskottogrill.se">Restaurangens Hemsidan</a></h2>
        </div>
        </div>
        <Navbar/>
        </div>

      )
    }
}
