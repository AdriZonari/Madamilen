import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // vi vill mecka med DOM, darfor anvander vi react-router-dom istallet, och BrowserRouter, eftersom den funkar i browsern
import { Whoops404 } from "./Whoops.js";
import  GoogleMapsContainer  from "./map";
import { List } from "./list";
import { Foteviken } from "./foteviken";
import { Icatoppen } from "./icatoppen";
import { CafeidetGrona } from "./cafeidetgrona";
import { Vespa } from "./vespa";
import { Kottochgrill } from "./kottochgrill";
import { Nasetbythesea } from "./nasetbythesea";
import { Shakespearepub } from "./shakespearepub";
import { Gateau } from "./gateau";
import { Smakverkeri } from "./smakverkeri";
import {Navbar} from "./navbar";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/map" component={GoogleMapsContainer} /> {/* ange inte filer i path,
      det ska bara vara vad som ska synas i adressen, behover inte finnas i
      verkligheten*/}
      <Route path="/list" component={List} />
      <Route path="/foteviken" component={Foteviken} />
      <Route path="/icatoppen" component={Icatoppen} />
      <Route path="/cafeidetgrona" component={CafeidetGrona} />
      <Route path="/vespa" component={Vespa} />
      <Route path="/kottochgrill" component={Kottochgrill} />
      <Route path="/nasetbythesea" component={Nasetbythesea} />
      <Route path="/shakespearepub" component={Shakespearepub} />
      <Route path="/gateau" component={Gateau} />
      <Route path="/smakverkeri" component={Smakverkeri} />
      <Route path="/navbar" component={Navbar} />
      <Route component={Whoops404} /> {/*genom att inte ange path tar den allt
      som inte redan matchats ovan*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();