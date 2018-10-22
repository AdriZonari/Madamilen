import React from 'react';
import  faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

const createStore = window.Redux.createStore;
const combineReducers = window.Redux.combineReducers;
const connect = window.ReactRedux.connect;
const Provider = window.ReactRedux.Provider;

const restaurantList = [

    <ul>
        <li id='1'><Link to = "/foteviken">Fotevikens Restaurang och Café</Link><LikeButton /></li>
        <li id='2'><Link to = "/icatoppen">Delitorget på ICA Toppen</Link> <LikeButton /></li>
        <li id='3'><Link to = "/cafeidetgrona">Café i det Gröna</Link> <LikeButton /></li>
        <li id='4'><Link to = "/vespa">Vespa</Link> <LikeButton /></li>
        <li id='5'><Link to = "/kottochgrill">Höllviken Kött och Grill</Link> <LikeButton /></li>
        <li id='6'><Link to = "/nasetbythesea">Näset by the Sea</Link> <LikeButton /></li>
        <li id='7'><Link to = "/shakespearepub">Shakespeare Pub</Link> <LikeButton /></li>
        <li id='8'><Link to = "/gateau">Gateau</Link> <LikeButton /></li>
        <li id='9'><Link to = "/smakverkeri">Smakverkeri</Link> <LikeButton /></li>
    </ul>,
  { id: 1, likes: 0 },
  { id: 2, likes: 0 },
  { id: 3, likes: 0 },
  { id: 4, likes: 0 },
  { id: 5, likes: 0 },
];
