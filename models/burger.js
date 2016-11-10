// requiring orm file from config folder
var orm = require('../config/orm.js');


// an object which is exported to controller file located in controllers folder which will hold all the sql data
var burger = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {

			cb(res);

		})
	},
		insertOne: function(cols, vals, cb) {
			orm.insertOne('burgers', cols, vals, function(res) {
				cb(res);
			})
	},
		updateOne: function(col, condition, cb) {
			orm.updateOne('burgers', col, condition, function(res) {
				cb(res);
			})
		}
}

module.exports = burger;