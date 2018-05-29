import React, { Component } from 'react';
import './App.css';
import logotyp_png from './logotyp_png.png';
import {Navbar} from "./navbar";

const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="358" height="64" className="Madamilen-logo" alt="logo" />
        </header>


export class List extends Component {
  render() {
    return (
        
<div className="MadamilensList">
        <AppHeader/>
        
        <div className="background">
                <ul>
                        <h1>Kommande Madamilen</h1>
                        <p>Vi ses väl?</p>
                        <li><h2>Höllviken</h2>
                                <p>2 Juni</p> </li>
                        <li><h2>Lund</h2>
                                <p>30 Juni</p> </li>
                        <li><h2>Malmö</h2>
                                <p>1 September</p></li>
                        <li><h2>Helsingborg</h2>
                                <p>29 September</p> </li>
                </ul>
                
        </div>
        <Navbar/>
</div>

        
        
        )
    }
}