import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:8080/api/main")
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
      this.setState({ posts: data.posts })
    }) 
  }


  render(){
    return (<div>
      <ul>
        {this.state.posts.map((data) => {
          let { name } = data.name;
          // let { post } = data.post;
          return <div><li key={name}>{name}</li></div>;
        })}
      </ul>
    </div>)
  }
}


export default App;