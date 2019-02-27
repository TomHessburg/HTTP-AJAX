import React from 'react'
import Friend from './Friend'

const FriendsList = props => {
    return(
        <div className="friends-list">
            {props.friends.map(friend => {
                return <Friend friend={friend} key={Math.floor(Math.random()*100)} />
            })}
        </div>
    );
}


export default FriendsList