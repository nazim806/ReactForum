let firebase = require('firebase')


var firebaseConfig = {
    
  };
  
  //array to Push to API 
  let data = [];


  //intialize firebase 
  firebase.initializeApp(firebaseConfig);

   //establish Variables for Connections
   let database = firebase.database();
   let connectionsRef = database.ref("/connections");
   let connectedRef = database.ref(".info/connected");
// defines database reference
let ref = database.ref()





//snapshots children as they are added 
ref.orderByChild("dateAdded").on("child_added", function (snapshot){
    name = snapshot.val().name
    post = snapshot.val().post
    
    postObs = {
        obName: name,
        obPost: post
    }
    
    data.push(postObs);
   
   
    console.log(postObs);
})

// function to sanitize date before pushing to firebase
function pusher() {

inputName = postName.val().trim();
inputPost = postPost.val().trim();

ref.push({
    
        name: inputName,
        post :inputPost
    
})
}

module.exports = data; 


