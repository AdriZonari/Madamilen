import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // vi vill mecka med DOM, darfor anvander vi react-router-dom istallet, och BrowserRouter, eftersom den funkar i browsern
import { Whoops404 } from "./Whoops.js";
import { MapContainer } from "./map";
import { MadamilensList } from "./list";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/map" component={MapContainer} /> // ange inte filer i path,
      det ska bara vara vad som ska synas i adressen, behover inte finnas i
      verkligheten
      <Route path="/list" component={MadamilensList} />
      <Route component={Whoops404} /> // genom att inte ange path tar den allt
      som inte redan matchats ovan
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
