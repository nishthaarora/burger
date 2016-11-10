// this is the file which is creating all the routes
var express = require('express');
var burger = require('../models/burger.js')
var router = express.Router();

// hitting on this route will direct user to /burgers route
router.get('/', function(req, res) {
	res.redirect('/burgers');
})

// hitting on this route we are calling the function from burgers.js file locates in models which will display all the burgers on the screen
router.get('/burgers', function(req, res) {
	burger.selectAll(function(data) {
		var allBurgers = {
			burgers: data
		}
		res.render('index', allBurgers);
	});
})

// when the user fill the form and click on submit it will hit this route which is created on the fly and this will update the sql table with user entry
router.post('/burgers/add', function(req, res) {
	burger.insertOne('burger_name', req.body.name, function() {
	res.redirect('/burgers');
	})
})

// if the user hit on Devour button then this route will be used to place the specific burger in the devour section
router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/burgers');
	})
})

// this file is requires in server.js
module.exports = router;