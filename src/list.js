import React, { Component } from 'react';
import './App.css';
import logotyp_png from './logotyp_png.png'

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
                        <li>Skanör/Falsterbo<br/>
                                12/05 </li>
                        <li>Höllviken<br/>
                                02/06 </li>
                        <li>Lund<br/>
                                30/06 </li>
                        <li>Malmö<br/>
                                01/09 </li>
                        <li>Helsingborg<br/>
                                29/09 </li>
                </ul>
                
        </div>
</div>
        )
    }
}