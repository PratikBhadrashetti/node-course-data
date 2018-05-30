console.log('Starting Server...!!!');
const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000 ;

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


mongoClient.connect(url, function(err , db){
	if(err){
		console.log("err : " , err);
		throw err ;
	}else{
		console.log('Database Connected...!!!');
	}
});

app.get('/' , (req , res) => {
    res.status(200).send('<h2>Hello Buddy...!!!</h2>');
});

app.get('/getRecord/:guid' , (req , res) => {
		mongoClient.connect(url, function(err, db) {
	    if (err) throw err;
		var dbo = db.db("BAP");
	    var query = { guid : req.params.guid };
		console.log("guid : " , req.params.guid );
	    dbo.collection("DEVICES").find(query).toArray(function(err, result) {
		if (err) throw err;
		res.status(200).send(result);	
		});
	});
});


app.get('/getRecords' , (req , res) => {
		mongoClient.connect(url, function(err, db) {
	    if (err) throw err;
		var dbo = db.db("BAP");
	    dbo.collection("DEVICES").find({}).toArray(function(err, result) {
		if (err) throw err;
		res.status(200).send(result);	
		});
	});
});


app.post('/addRecord' , (req , res) => {
	console.log('req.body : ' , req.body);
	console.log('Id : ' , req.body.guid);
	console.log('Security Zone : ' , req.body['security-zone']);
	
	mongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("BAP");
	var newObject = { "guid" : req.body.guid , "security-zone" : req.body['security-zone'] };
	dbo.collection("DEVICES").insertOne(newObject, function(err, response) {
		if (err) throw err;
		res.status(200).send(response);
	  });
	});
});


app.listen(port , () => {
	console.log(`Express Server Started On Port : ${port}...`);
});

module.exports.app = app;