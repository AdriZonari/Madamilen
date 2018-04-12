import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Bars from 'react-icons/lib/fa/bars'
//import ImageResponsive, {Source} from 'react-image-responsive';
//import PropTypes from 'prop-types';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/*<div className="Madamilen-logo">
        <ImageResponsive type="image" src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=380" width="380" height="68"> 
        <Source src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=380" maxWidth={380} /> 
        <Source src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=760" maxWidth={760} />
        <Source src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=150" maxWidth={150} />
        <Source src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=300" maxWidth={300} />
    </ImageResponsive>
        </div>*/}
          <img src="https://madamilen.files.wordpress.com/2017/06/logotyp_png.png?w=380" width="380" height="68" className="Madamilen-logo" alt="logo" />
          <div className="menu">
          <Bars/> Meny
          </div>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Kulinarisk matvandring i Skåne</h1>
        </header>
        <p className="App-intro">
          Madamilen är en matvandring i olika delar av Skåne där man går eller cyckla till 10 olika restaurang och får provsmaka deras stjärnrätt
        </p>
          <h2>Madamilen Landskrona 12/06</h2>
      
      </div>
    );
  }
}

export default App;
