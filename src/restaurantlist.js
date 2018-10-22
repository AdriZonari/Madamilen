import React from 'react';
import {Link} from 'react-router-dom';
import './foteviken';
import './icatoppen';
import {LikeButton} from './likebutton';

 
export class RestaurantList extends React.Component {
  render() {
    return (
  
  <div className="RestaurantList">
        <ul>
        <li><Link to = {process.env.PUBLIC_URL + "/foteviken"}>Fotevikens Restaurang och Café</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/icatoppen"}>Delitorget på ICA Toppen</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/cafeidetgrona"}>Café i det Gröna</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/vespa"}>Vespa</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/kottochgrill"}>Höllviken Kött och Grill</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/nasetbythesea"}>Näset by the Sea</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/shakespearepub"}>Shakespeare Pub</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/gateau"}>Gateau</Link> <LikeButton /></li>
        <li><Link to = {process.env.PUBLIC_URL + "/smakverkeri"}>Smakverkeri</Link> <LikeButton /></li>
</ul>
    </div>
    )

  }
}