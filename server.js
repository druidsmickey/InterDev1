var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var app = express();

app.use('/', express.static(__dirname + '/dist/intersky'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongo.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true });
var db = mongo.connection;

// Models
var Brands = require('./brands.model.js');
var CCTVs = require('./cctv.model.js');

db.once('open', function callback () {
  console.log("connected");

  	app.get('/brand',function(req,res){
  		Brands.find({},function(err,docs) {
  			if (err) return console.error(err);
  			res.json(docs);
  		})
  	})

    app.get('/cctv',function(req,res){
      CCTVs.find({},function(err,docs) {
        if (err) return console.error(err);
        res.json(docs);
      })
    })


    app.post('/addcctvs',function(req,res){
      var param = new CCTVs(req.body);
      param.save(function(err,obj){
        if(err) return console.error(err);
        res.status(200).json(obj);
      })
    })

	app.get('/*', function(req, res) {
		res.sendFile(__dirname + '/dist/intersky/index.html');
	});

	app.listen(8080,function(){
		console.log('Listening o port 8080')
	})
});

