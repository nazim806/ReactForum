import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import styled from 'styled-components';
// import corgisImage from './img/soccer-img-1.jpg';
// import forumLogo from './img/forum-logo.png';
=======
>>>>>>> cec00b989ded6c75590267c856cbdcd0084586f0
const fireDB = require('firebase');




const Button = styled.button`
  background-color: ${props => props.backgroundColor  || "#4c84ff" } ;
  color:white;
  border-radius: ${props => props.borderRadius || "0px"};
  height: 30px;
  width: ${props => props.width || "80px"};

  &:hover{
    opacity:0.9;
  }



`
// border-radius: ${ props => props.borderRadius || "30px"};
const Card = styled.section`
  height: ${props => props.height || "0px" };
  width: ${props => props.width || "0px"};
  background-color:white;
  
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${ props => props.gridTemplateColumns || "1fr 2fr 1fr"};
  align-items:center;
  padding: ${props => props.padding || "0px"};
`

const Profile = styled.div`
<img src={corgisImage} width="10%"/>
`


const Container = styled.section`
  display:grid;
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding  ||  "0px 30px"};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || "30px" };
`

const Title = styled.h1`
  margin:0;
  padding:${props => props.padding || "0px"};
  font-size:26px;
`

const Paragraph = styled.p`
  color:gray;
  margin:0;
  padding:0;
`
class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: []
    }
  };
<<<<<<< HEAD


=======


>>>>>>> cec00b989ded6c75590267c856cbdcd0084586f0
  componentWillMount(){
    fetch("http://localhost:8080/api/main")
    .then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data.posts);
      this.setState({ posts: data.posts })
    }) 
  };

  
<<<<<<< HEAD


  // render(){
  //   return (
  //   <Container>
  //     <Card>
  //     <div>
  //     <ul>
  //       {this.state.posts.map((data) => {
  //         console.log(data);
  //         let { obName } = data;
  //         let { obPost } = data;
  //         return <div><li key={obName}>{obName}</li><li key={obPost}>{obPost}</li></div>;
  //       })}
  //     </ul>
  //   </div>
  //   </Card>
  //   </Container>
  //   )}



  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const data = new FormData(form);
  
    fetch('http://localhost:8080/api/main', {
      method: "POST",
      body: data
    })
  }


  render(){
    return(
      <div>
        <Container>
          <Card width="500px" height="100px" >
          
            <section>
              <Title>React Forum</Title>
              
            </section>
              
          </Card>
          
                    <Container margin="30px 0px 0px 0px" padding="0px" gridTemplateColumns="1fr 1fr 1fr" >
            <Container padding="0px" gridTemplateRows="auto auto" gridGap="20px">
              <Card width="100%" height="200px" gridTemplateColumns="1fr" gridTemplateRows="1fr 1fr" padding="10px">
                <Title padding="20px">Input</Title>
                <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Name"/>

        <label htmlFor="post">Post</label>
        <input id="post" name="post" type="post" placeholder="Post"/>

        <button>Submit</button>
      </form>
                
              </Card>
              
              
            </Container>
           
           
           
           
            <Container width="100%" height="200px"gridTemplateColumns="1fr" >
      <Card height="100%">     
      <div>
      
=======


  render(){
    return (
    <div>
      <ul>
>>>>>>> cec00b989ded6c75590267c856cbdcd0084586f0
        {this.state.posts.map((data) => {
          console.log(data);
          let { obName } = data;
          let { obPost } = data;
<<<<<<< HEAD
          return <Container width="500px"><Card width="500px" height="100px" gridTemplateColumns="1fr" gridTemplateRows="1fr 1fr" padding-left="10px 10px 10px 0px">
            <div id="postData"><b><li key={obName}>{obName}</li></b><i><p font-size="50px" key={obPost}>{obPost}</p></i></div>
             </Card></Container>;
=======
          return <div><li key={obName}>{obName}</li><li key={obPost}>{obPost}</li></div>;
>>>>>>> cec00b989ded6c75590267c856cbdcd0084586f0
        })}
      
    </div>
    </Card>
    </Container>
           
          
          </Container>
          
        
        </Container>
       
      </div>
    )
  }




}



export default App;