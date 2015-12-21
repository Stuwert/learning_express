var express = require('express'),
  app = express();

  app.set('view engine', 'ejs');

  //WHEN the app loads for the first time, register "ejs" as the emplating language
  // http://www.embeddedjs.com
  app.get('/hi', function (req, res){
    //THEN read the file name index.ejs, and do some text replacing
    // such that <%= name %> becomes "Elie"
    var name = req.query.name;
    res.render('index', {name: name});
  })
//
// var vegetables = [
//   "Carrots",
//   "Cucumber",
//   "Peas"
// ];
//
//   //When a user visits the homepage (http://localhost:3000)
//   app.get("/", function(req, res){
//     // THEN send back the response: 'Hello World'
//     res.send("Hello World");
//   });
//
//   //When a user goes to http://localhost:3000/vegetables
//   app.get("/vegetables", function(req, res){
//     //Then send back a response with the veggies
//     res.send(vegetables.join(", "));
//   })
//
//   app.get("/meaning-of-life", function (req, res){
//     res.send("42");
//   })
//
//   //When someone visits /hello/john
//   //THEN set req.params to an object that looks like this  { name: "john"}
//
//   app.get("/hello/:name", function (req, res){
//     res.send("Hello, " + req.params.name );
//   })
//
//   //When someone visits /companies/apple/products/iphone
//   //THEN set req.params to an object that looks like this:
//   // {company: "apple", productName: "iPhone"}
//
//   app.get("/companies/:company/products/:productName", function (req, res){
//     res.send (req.params.company + " makes the " + req.params.productName);
//   });
//
//   //WHEN someone visits /greeting?name=Sue
//   //THEN set req.query to an object
//   app.get("/hi", function(req, res){
//     var name = req.query.name;
//     res.send("Hello, " + name);
//   });
//


  //Start the server and make our web app available on http://localhost:3000
  app.listen(3000, function(){
    console.log("Starting a server on localhost:3000");
  });
