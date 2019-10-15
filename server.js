const fireDB = require('./firebase');
const express = require('express');
const app = express();

//set PORT
const PORT = process.env.PORT || 8080;

fireDB.selectAll(function(data){
    console.log(data);
} );

//allows Parsing JSON data and body.data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows exprees to 

app.get("/api/main", function (req, res) {
    res.json(main);
});

app.post("/api/main", function (req,res) {
    let newPost = req.body;
    res.json(newPost);
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });