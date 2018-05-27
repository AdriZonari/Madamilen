import React from 'react';
import {Link} from 'react-router-dom';
import './foteviken';
import './icatoppen';

 
export class RestaurantList extends React.Component {
  render() {
    return (
  
  <div className="RestaurantList">
        <ul>
        <li><Link to = "/foteviken">Fotevikens Restaurang och Café</Link></li>
        <li><Link to = "/icatoppen">Delitorget på ICA Toppen</Link></li>
        <li><Link to = "/cafeidetgrona">Café i det Gröna</Link></li>
        <li><Link to = "/vespa">Vespa</Link></li>
        <li><Link to = "/kottochgrill">Höllviken Kött och Grill</Link></li>
        <li><Link to = "/nasetbythesea">Näset by the Sea</Link></li>
        <li><Link to = "/shakespearepub">Shakespeare Pub</Link></li>
        <li><Link to = "/gateau">Gateau</Link></li>
        <li><Link to = "/smakverkeri">Smakverkeri</Link></li>
</ul>
    </div>
    )

  }
}