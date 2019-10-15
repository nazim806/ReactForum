const data = require('./firebase');
const express = require('express');
const app = express();

//set PORT
const PORT = process.env.PORT || 8080;

console.log(data);

//allows Parsing JSON data and body.data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows exprees to 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });