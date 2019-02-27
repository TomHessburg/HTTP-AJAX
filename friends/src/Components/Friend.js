import React from 'react'

const Friend = props => {
    return(
        <div className="friend" id={props.friend.id}>
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.age}</h3>
            <h4>{props.friend.email}</h4>

            <button>Edit</button>

            <button
            onClick={props.handelDelete}
            id={props.friend.id}
            >Delete</button>

        </div>
    );
}


export default Friend