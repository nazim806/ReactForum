const fireDB = require('./firebase');
const express = require('express');
const app = express();

//set PORT
const PORT = process.env.PORT || 8080;

let arr = [];


//pusher function, allows callbacks
function pusher (x){
    arr.push(x)
};








//allows Parsing JSON data and body.data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


fireDB.selectAll(function(data){
    pusher(data)
})


//Pulls info from Firbase and pushes it to black array (will not load of first go)
app.get("/api/main", function (req, res) {

 res.json(arr)
    
});

app.post("/api/main", function (req,res) {
    var newPost = req.body;
    fireDB.pusher(newPost);
    res.json(arr);
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });