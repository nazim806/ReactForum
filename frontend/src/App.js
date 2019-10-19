import React, { Component } from 'react';
import './App.css';
const fireDB = require('firebase');

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: []
    }
  };


  componentWillMount(){
    fetch("http://localhost:8080/api/main")
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data.posts);
      this.setState({ posts: data.posts })
    }) 
  };

  


  render(){
    return (
    <div>
      <ul>
        {this.state.posts.map((data) => {
          console.log(data);
          let { obName } = data;
          let { obPost } = data;
          return <div><li key={obName}>{obName}</li><li key={obPost}>{obPost}</li></div>;
        })}
      </ul>
    </div>)
  }
}


export default App;