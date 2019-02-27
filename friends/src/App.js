import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import FriendsList from './Components/FriendsList'

class App extends Component {

  constructor(){
    super();

    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))

  }



  render() {
    return (
      <div className="App">
        <h1>Your Friends List</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
