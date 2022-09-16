import React, {Component, createContext} from 'react';

export const LikeContext = createContext ();

class LikeContextProvider extends Component {
    state = {
        isLiked : false
    }

    toggleLike = () => {
        this.setState({isLiked : !this.state.isLiked })
    }
    render() { 
        return (
            <LikeContext.Provider value={{...this.state, toggleLike : this.toggleLike}}>
                 {this.props.children}
            </LikeContext.Provider>
        );
    }
}
 
export default LikeContextProvider;
