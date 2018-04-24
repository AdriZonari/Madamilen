import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router';
import { Whoops404 } from './Whoops.js';
import { MapContainer } from './map';
import { MadamilensList } from './list';


ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/map.js" component={MapContainer}/>
    <Route path="/list.js" component={MadamilensList}/>
    <Route path="*" component={Whoops404}/>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
