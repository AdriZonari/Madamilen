import React, { Component } from 'react';
import './App.css';
import logotyp_png from './logotyp_png.png';
import prickar_png from './prickar_png.png';
import  './map.js';
import  './list';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      <div className="App-intro">
        <div className="background"></div>
          <div className="foreground">
             <h1>Välkommen!</h1>
                <p>Madamilen är en kulinarisk
                    vandring under dagtid. Ett möte mellan matglada.
                    Tio stopp och tio smaksensationer.</p>
                      
                      <Link to = "/map" style={{ textDecoration: 'none' }}>
                        <h1 className="stad">Höllviken</h1>
                      </Link> 
                      
                      <img className="prickar" src={prickar_png} width="320" height="30" alt="prickar" />
                      <br/> <br/>
                      <Link to = "/list">
                        <button className="kommande">
                        <p>Kommande Madamilen!</p>
                        </button>
                      </Link>
                      
          </div>
      </div>
      </div>
    );
  }
}

const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="320" height="55" className="Madamilen-logo" alt="logo" />
        </header>

export default App;
