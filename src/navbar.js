import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'



export class Navbar extends React.Component {
    render() {
      return (
        <div id="navbar">
  <Link to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
  <Link to="map"><FontAwesomeIcon icon={faMapMarkerAlt}>Karta</FontAwesomeIcon></Link>
  
</div>

    )
}
}
