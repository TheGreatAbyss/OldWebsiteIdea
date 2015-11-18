var pg = require('pg');
var express = require('express');
var router = express.Router();
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var rq = require('../results_query.js')

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Lease Lion - Home' });
});

/* GET home page. */
router.get('/search', function(req, res) {
 	res.render('search_form', { 
  	title: 'Lease Lion - Search',
  	results: false
  });
});




router.get('/search/:results', function(req, res, next) {
	var query = rq(req.query)
  	console.log(query)
  	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    	client.query(query, function(err, result) {
      		done();
      		if (err) { 
      			console.error(err) 
      		}
      		else { 
      			req.newobj = result.rows;
      			console.log("happened")
      			next();
       		}
    	});
    });
}, function(req, res) {
	// console.log(req.newobj)
 	res.render('search_form', { 
 	results: true,
  	title: 'Lease Lion - Search',
  	data: req.newobj,
	locations : req.query.locations,
	minprice : req.query.minprice,
	maxprice : req.query.maxprice === "999999" ? 0 : req.query.maxprice,
	availableby :req.query.availableby,
	bedrooms : req.query.bedrooms,
	bathrooms : req.query.bathrooms,
	bedmore : req.query.bedmore,
	bathmore : req.query.bathmore,
	By_Owner : req.query.By_Owner,
	Dishwasher : req.query.Dishwasher,
	Laundry : req.query.Laundry,
	Dogs : req.query.Dogs,
	Cats : req.query.Cats,
	Other_Pets : req.query.Other_Pets,
	Outdoor : req.query.Outdoor,
	Fireplace : req.query.Fireplace,
	Furnished : req.query.Furnished,
	Gym : req.query.Gym,
	Pool : req.query.Pool,
	Storage : req.query.Storage,
	Parking : req.query.Parking
  });
})


/*Get Test */
router.get('/test', function(req, res) {
  res.render('test', { title: 'Lease Lion - Search' });
});




module.exports = router;
