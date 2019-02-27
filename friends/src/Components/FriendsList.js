import React from 'react'
import Friend from './Friend'

const FriendsList = props => {
    return(
        <div className="friends-list">
            {props.friends.map(friend => {
                return <Friend 
                friend={friend} 
                key={Math.random()*100} 
                handelDelete={props.handelDelete}
                />
            })}
        </div>
    );
}


export default FriendsList