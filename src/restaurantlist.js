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
        <li><Link to = "/foteviken">Fotevikens Restaurang och Café</Link> <LikeButton /></li>
        <li><Link to = "/icatoppen">Delitorget på ICA Toppen</Link> <LikeButton /></li>
        <li><Link to = "/cafeidetgrona">Café i det Gröna</Link> <LikeButton /></li>
        <li><Link to = "/vespa">Vespa</Link> <LikeButton /></li>
        <li><Link to = "/kottochgrill">Höllviken Kött och Grill</Link> <LikeButton /></li>
        <li><Link to = "/nasetbythesea">Näset by the Sea</Link> <LikeButton /></li>
        <li><Link to = "/shakespearepub">Shakespeare Pub</Link> <LikeButton /></li>
        <li><Link to = "/gateau">Gateau</Link> <LikeButton /></li>
        <li><Link to = "/smakverkeri">Smakverkeri</Link> <LikeButton /></li>
</ul>
    </div>
    )

  }
}