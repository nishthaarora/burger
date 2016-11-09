
var connection = require('./connection.js');


var orm = {
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if(err)throw err;
			cb(result);
		});
	},
	insertOne: function(table, col, vals, cb){
		var queryString ='INSERT INTO ' + table + ' (' + col + ') ' + 'VALUES (' + '?' + ')';

		console.log(connection.query(queryString, vals, function(err, result){
			if(err)throw err;
			cb(err, result);
		}));
	},
	updateOne: function(table, col, condition, cb){
		var colArr = [];
		for(var key in col) {
			if(col.hasOwnProperty(key)) {
				colArr.push(key + '=' + col[key]);
			}

			var devourString = colArr.toString();
			console.log(devourString);
		}

		var queryString = 'UPDATE ' + table + ' SET ' + devourString + ' WHERE ' + condition;
		// var queryString = 'UPDATE ' + table;
		// queryString += 'SET';
		// queryString += col.toString();
		// queryString += 'WHERE';
		// queryString += condition;
		console.log('table', table);
		console.log('col', col);
		console.log('val', condition);

		console.log(queryString);

		connection.query(queryString, condition ,function(err, result){
			if(err)throw err;
			console.log('result', result);
			cb(err, result);
		});
	}
}

module.exports = orm;