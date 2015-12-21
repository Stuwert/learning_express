var express = require('express'),
  app = express();

  app.set('view engine', 'ejs');

  //WHEN the app loads for the first time, register "ejs" as the emplating language
  // http://www.embeddedjs.com
  app.get('/:route/:num1/:num2', function (req, res){
    //prints the sum added of the two numbers
    var mathtype = req.params.route;
    var result;
    var num1 = +req.params.num1;
    var num2 = +req.params.num2;
    switch (mathtype){
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mult":
        result = num1 * num2;
        break;
      case "div":
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    res.render('index', {finalnum : result});
  })
  // http://www.embeddedjs.com
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
  // app.get("/add/:num1/:num2", function (req, res){
  //   var number1 = +req.params.num1;
  //   var number2 = +req.params.num2;
  //   res.send("Hello, " + typeof number1 + " " + typeof number2 );
  // })
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
