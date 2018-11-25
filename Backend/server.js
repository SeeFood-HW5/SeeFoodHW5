var dotenv = require('dotenv');
//require the express nodejs module
var express = require('express'),
	//set an instance of express
	app = express(),
	//require the body-parser nodejs module
	bodyParser = require('body-parser'),
	//require the path nodejs module
	path = require("path"),
	lib = require('lib')({token: process.env.STDLIB_LIBRARY_TOKEN});
	
// const lib = require('lib');
const sms = lib.utils.sms['@1.0.9'];

var d = new Date();	
//support parsing of application/json type post data
app.use(bodyParser.json());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));

var price;
var restaurant;
var phonenum;
var name;
var address;
//var items;

//tell express what to do when the /form route is requested
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
	console.log(req.body);
	var json = JSON.stringify(req.body);
	var jsonStuff = JSON.parse(json);
	console.log(jsonStuff);
	price = jsonStuff.jsonPrice;
	phonenum = jsonStuff.phoneNumber;
	name = jsonStuff.name;
	address = jsonStuff.address;
	restaurant = jsonStuff.restuarant;
	console.log(price);
	console.log(phonenum);
	// Timed messages to be sent to slack
	// console.log(myTimeout());
	myTimeout();
	res.send(req.body);
});

function myTimeout () {
	setTimeout(orderReceived, 0);
	setTimeout(orderShipped, 15000);
	setTimeout(orderArrived, 30000);
}

// Timed responses
async function orderReceived() {
    console.log("Your order has been received and is being prepared");
    let result = await sms({
  		to: phonenum, // (required)
  		body: "Thank you for your order, " + name + "! Your total was $" + price + " and has been received by " + restaurant + "." // (required)
	});
}

async function orderShipped() {
    console.log("Your order has been prepared and is now being delivered");
    let result = await sms({
  		to: phonenum, // (required)
  		body: "Hey, " + name + "! Your food from " + restaurant + " is finished, and is on it's way to " + address + "!"  // (required)
	});
}

async function orderArrived() {
    console.log("Your order has arrived, please come to pick it up");
    let result = await sms({
  		to: phonenum, // (required)
  		body: "Your food from " + restaurant + " has arrived! We look forward to serving you again!" // (required)
	});
}

//wait for a connection
app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});