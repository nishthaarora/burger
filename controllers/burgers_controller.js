
var express = require('express');
var burger = require('../models/burger.js')
var router = express.Router();


router.get('/', function(req, res) {
	res.redirect('/burgers');
})

router.get('/burgers', function(req, res) {
	burger.selectAll(function(data) {
		var allBurgers = {
			burgers: data
		}
		res.render('index', allBurgers);
	});
})

router.post('/burgers/add', function(req, res) {
	burger.insertOne('burger_name', req.body.name, function() {
	res.redirect('/burgers');
	})
})

router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/burgers');
	})
})


module.exports = router;