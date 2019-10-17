const firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig');

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
pusher: function(cb) {

inputName = postName.val().trim();
inputPost = postPost.val().trim();

ref.push({
    
        name: inputName,
        post :inputPost
    
})
}
}
module.exports = fireDB; 

