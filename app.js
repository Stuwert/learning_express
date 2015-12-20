var express = require('express'),
  app = express();

var vegetables = [
  "Carrots",
  "Cucumber",
  "Peas"
];

  //When a user visits the homepage (http://localhost:3000)
  app.get("/", function(req, res){
    // THEN send back the response: 'Hello World'
    res.send("Hello World");
  });

  //When a user goes to http://localhost:3000/vegetables
  app.get("/vegetables", function(req, res){
    //Then send back a response with the veggies
    res.send(vegetables.join(", "));
  })

  app.get("/meaning-of-life", function (req, res){
    res.send("42");
  })

  //Start the server and make our web app available on http://localhost:3000
  app.listen(3000, function(){
    console.log("Starting a server on localhost:3000");
  });
