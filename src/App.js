import React, { Component } from 'react';
import './App.css';
import logotyp_png from './logotyp_png.png'

class App extends Component {
  render() {
    return (
      <div className="App">
    <AppHeader />
    <div className="App-intro">
        <div className="pink">
        </div>
        <div className="foreground">
        <h1>Välkommen!</h1>
          <p>Madamilen är en kulinarisk
           vandring under dagtid. Ett möte mellan matglada.
            Tio stopp och tio smaksensationer.</p>
        <button className="stad">Landskrona</button>
        <button className="kommande">På Gång</button>
        </div>
     </div>
</div>
    );
  }
}

const AppHeader = () =>  
    
      <header className="App-header">
          <img src={logotyp_png} width="358" height="64" className="Madamilen-logo" alt="logo" />
        </header>

export default App;
