"use strict"

var express = require('express');
var app = express();
var path = require('path');


// middleware to define folder for static files

app.use(express.static('public'))

app.get('/', function(req, res){
	//003 What Redux is and How React-Redux work together
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// run app at port 3000
app.listen(3000, function(){
	console.log("web server is listen port 3000");
})