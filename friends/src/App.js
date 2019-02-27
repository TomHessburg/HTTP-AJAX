import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import AddFriendForm from './Components/AddFriendForm'
import FriendsList from './Components/FriendsList'

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    }
  }
  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }
  handelSubmit = e => {
    e.preventDefault();
    if(this.state.name.length < 1){
      return (alert("You must at least supply a name attribute to the form"))
    }
    const newFriend = {
      id: Math.floor(Math.random()*10000),
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data,
          name: "",
          age: "",
          email: ""
        })
      })
      .catch(err => console.log(err))


  }
  handelChange = e => {
    console.log(e.target)
    this.setState({
      [e.target.placeholder]: e.target.value
    })
  }
  handelDelete = e => {
    console.log(e.target.id)
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(res => {
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => console.log(err))
  }
  handelUpdate = (id, obj) => {
    console.log(obj)
    axios
      .put(`http://localhost:5000/friends/${id}`, obj)
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))


  }

  render() {
    return (
      <div className="App">
        <h1>Your Friends List</h1>

        <FriendsList 
        friends={this.state.friends}
        handelEdit={this.handelEdit}
        handelDelete={this.handelDelete}
        handelChange={this.handelChange}
        handelUpdate={this.handelUpdate}
        />




        <AddFriendForm 
        handelSubmit={this.handelSubmit} 
        handelChange={this.handelChange}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
