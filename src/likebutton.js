import React from 'react';
import  faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



export class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false,
        
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const label = this.state.liked ? <FontAwesomeIcon icon={faThumbsUp}style={{color:'#ff00ff'}}></FontAwesomeIcon> : <FontAwesomeIcon icon={faThumbsUp}style={{color:'#404040'}}></FontAwesomeIcon>;
      return (
        <div className="customContainer">
          <button className="btn btn-primary" onClick={this.handleClick}>
            {label}</button>
        </div>
      );
    }
  }
  
  