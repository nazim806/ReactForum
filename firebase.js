var firebaseConfig = {
  
  };

  //intialize firebase 
  firebase.initializeApp(firebaseConfig);

   //establish Variables for Connections
   let database = firebase.database();
   let connectionsRef = database.ref("/connections");
   let connectedRef = database.ref(".info/connected");

   database.ref().on("value", function(childSnapshot) {
    p = childSnapshot.val().p;
    console.log(p)
   });