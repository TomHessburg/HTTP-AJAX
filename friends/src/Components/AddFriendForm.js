import React from 'react'

const AddFriendForm = props => {
    return(
        <div className="friends-form" onSubmit={props.handelSubmit}>
            <form>
                <input 
                placeholder="name" 
                onChange={props.handelChange}
                value={props.name}
                />
                
                <input 
                placeholder="age" 
                onChange={props.handelChange}
                value={props.age}
                />
                
                <input 
                placeholder="email" 
                onChange={props.handelChange}
                value={props.email}
                />
                
                <br />
                
                <button>Submit Friend</button>
            </form>
        </div>
    );
}

export default AddFriendForm;