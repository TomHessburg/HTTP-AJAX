import React from 'react'

const Friend = props => {
    return(
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.age}</h3>
            <h4>{props.friend.email}</h4>
        </div>
    );
}


export default Friend