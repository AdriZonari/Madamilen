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
      <Route path={process.env.PUBLIC_URL + "/"} exact component={App} />
      <Route path={process.env.PUBLIC_URL + "/map"} component={GoogleMapsContainer} /> {/* ange inte filer i path,
      det ska bara vara vad som ska synas i adressen, behover inte finnas i
      verkligheten*/}
      <Route path={process.env.PUBLIC_URL + "/list"} component={List} />
      <Route path={process.env.PUBLIC_URL + "/foteviken"} component={Foteviken} />
      <Route path={process.env.PUBLIC_URL + "/icatoppen"} component={Icatoppen} />
      <Route path={process.env.PUBLIC_URL + "/cafeidetgrona"} component={CafeidetGrona} />
      <Route path={process.env.PUBLIC_URL + "/vespa"} component={Vespa} />
      <Route path={process.env.PUBLIC_URL + "/kottochgrill"} component={Kottochgrill} />
      <Route path={process.env.PUBLIC_URL + "/nasetbythesea"} component={Nasetbythesea} />
      <Route path={process.env.PUBLIC_URL + "/shakespearepub"} component={Shakespearepub} />
      <Route path={process.env.PUBLIC_URL + "/gateau"} component={Gateau} />
      <Route path={process.env.PUBLIC_URL + "/smakverkeri"} component={Smakverkeri} />
      <Route path={process.env.PUBLIC_URL + "/navbar"} component={Navbar} />
      <Route component={Whoops404} /> {/*genom att inte ange path tar den allt
      som inte redan matchats ovan*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();