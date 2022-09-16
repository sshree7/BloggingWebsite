import React, { Component } from 'react';
import { LikeContext } from '../../contexts/LikeContext';

class LikeBlog extends Component {
  render() { 
    return ( 
        <LikeContext.Consumer>{(context) => {
            const {isLiked, toggleLike}= context;

            return (
                <div className="like">
          {isLiked? 'Liked Blog' :'Click To Like'};
          </div>
            );

        }}
        
              
          </LikeContext.Consumer>
     
    );
  }
}

export default LikeBlog;
 
