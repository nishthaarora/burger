// requiring connection file which has server connection settings
var connection = require('./connection.js');

/* object with all the methods that links it to the sql table
@selectAll to select all the entries in the table
@insertOne is to insert one entry at a time in the sql table
@updateOne is to update one entry at a time in the sql table.
*/
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

		// this is to unwimd the col object whose values are coming from conrollers - burgers_controller file.
		var colArr = [];
		for(var key in col) {
			if(col.hasOwnProperty(key)) {
				colArr.push(key + '=' + col[key]);
			}

			var devourString = colArr.toString();
			console.log(devourString);
		}

		var queryString = 'UPDATE ' + table + ' SET ' + devourString + ' WHERE ' + condition;

		console.log(queryString);

		connection.query(queryString, condition ,function(err, result){
			if(err)throw err;
			console.log('result', result);
			cb(err, result);
		});
	}
}

// exporting the orm to burger.js file in models
module.exports = orm;