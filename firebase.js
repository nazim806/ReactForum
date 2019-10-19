const firebase = require('firebase');


const firebaseConfig = {
    apiKey: "AIzaSyDZ1liTyCTM7ia8sIkudyB85flGOMmlGiI",
   authDomain: "react-forum-75f18.firebaseapp.com",
   databaseURL: "https://react-forum-75f18.firebaseio.com",
   projectId: "react-forum-75f18",
   storageBucket: "",
   messagingSenderId: "60431432048",
   appId: "1:60431432048:web:3a8b828170b4b73d7237b5",
   measurementId: "G-GQSVCWGWET"
  
  };

  //intialize firebase 
  firebase.initializeApp(firebaseConfig);

   //establish Variables for Connections
   let database = firebase.database();
   let connectionsRef = database.ref("/connections");
   let connectedRef = database.ref(".info/connected");
// defines database reference
let ref = database.ref()



//snapshots children as they are added 

fireDB = {
selectAll: function(cb){
ref.orderByChild("dateAdded").on("child_added", function (snapshot){
    name = snapshot.val().name
    post = snapshot.val().post
    
    postObs = {
        obName: name,
        obPost: post
    }

    cb(postObs);
})
},
// function to sanitize date before pushing to firebase
pusher: function(newPost) {

// inputName = postName.val().trim();
// inputPost = postPost.val().trim();

inputName = newPost.name;
inputPost = newPost.post;

ref.push({
    
        name: inputName,
        post: inputPost
    
})
}
}
module.exports = fireDB; 

