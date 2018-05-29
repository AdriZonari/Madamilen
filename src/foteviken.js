import React from 'react';
import logotyp_png from './logotyp_png.png'
import {Navbar} from "./navbar";
import prickar_png from './prickar_png.png'


const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="358" height="64" className="Madamilen-logo" alt="logo" />
        </header>



export class Foteviken extends React.Component {
    render() {
      return (

        <div>
        <AppHeader/>
        <div className="background">
        <div  className="RestaurantInfo">
        <h1>Meny</h1>
        <img className="prickar" src={prickar_png} width="250" height="22" alt="prickar" />
        <p>"Vikinga husmanskost"</p>
        <h2><a href="https://fotevikensmuseum.se/d/museet/butiken">Restaurangens Hemsida</a></h2>
        </div>
        </div>
        <Navbar/>
        </div>
      )
    }
}
    