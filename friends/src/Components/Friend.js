import React, { useState } from 'react'

const Friend = props => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div className="friend" id={props.friend.id}>
            <h2>{props.friend.name}</h2>
            <h3>{props.friend.age}</h3>
            <h4>{props.friend.email}</h4>


            <form>
                <input 
                placeholder="name" 
                value={name}
                onChange={e => {
                    e.preventDefault();
                    console.log("name: " +e.target.value);
                    setName(e.target.value);
                }}
                />
                
                <input 
                placeholder="age" 
                value={age}
                onChange={e => {
                    e.preventDefault();
                    console.log("age: " +e.target.value);
                    setAge(e.target.value)
                }}
                />
                
                <input 
                placeholder="email"
                value={email}
                onChange={e => {
                    e.preventDefault();
                    console.log("email: " + e.target.value);
                    setEmail(e.target.value)
                }} 
                />

                <button 
                id={props.friend.id}
                onClick={ e => {
                    e.preventDefault();

                    const edited = {
                        name: name,
                        age: age,
                        email: email,
                        id: props.friend.id
                    }

                    props.handelUpdate(props.friend.id, edited);
                } }
                >Edit</button>

                <button
                onClick={props.handelDelete}
                id={props.friend.id}
                >Delete</button>

            </form>

        </div>
    );
}


export default Friend