import React from 'react';
import logotyp_png from './logotyp_png.png'

const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="358" height="64" className="Madamilen-logo" alt="logo" />
        </header>



export class Gateau extends React.Component {
    render() {
      return (

        <div>
        <AppHeader/>
        <div className="background">
        <div  className="RestaurantInfo">
        <h1>Meny</h1>
        <p>"Café och Bageri"</p>
        <h2><a href="http://www.gateau.se/">Restaurangens Hemsidan</a></h2>
        </div>
        </div>
        </div>

      )
    }
}
