import React from 'react';
import {Link} from 'react-router-dom';
import './foteviken';
import './icatoppen';


 
export class RestaurantList extends React.Component {
  render() {
    return (
  
  <div className="RestaurantList">
        <ul>
       
          <h2>Klicka på resturangerna för mer information!</h2>
          
        <li><Link to = "/foteviken" style={{ textDecoration: 'none' }}>Fotevikens Restaurang och Café (start)</Link></li>
        <li><Link to = "/icatoppen" style={{ textDecoration: 'none' }}>Delitorget på ICA Toppen</Link></li>
        <li><Link to = "/cafeidetgrona" style={{ textDecoration: 'none' }}>Café i det Gröna</Link></li>
        <li><Link to = "/vespa" style={{ textDecoration: 'none' }}>Vespa</Link></li>
        <li><Link to = "/kottochgrill" style={{ textDecoration: 'none' }}>Höllviken Kött och Grill</Link></li>
        <li><Link to = "/nasetbythesea" style={{ textDecoration: 'none' }}>Näset by the Sea</Link></li>
        <li><Link to = "/shakespearepub" style={{ textDecoration: 'none' }}>Shakespeare Pub</Link></li>
        <li><Link to = "/gateau" style={{ textDecoration: 'none' }}>Gateau</Link></li>
        <li><Link to = "/smakverkeri" style={{ textDecoration: 'none' }}>Smakverkeri</Link></li>
        
</ul>
    </div>
    )

  }
}
