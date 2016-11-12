// making sql connection
var mysql = require('mysql');

var connection;

var newConnection = "mysql://root:test@localhost:3306/burgers_db";
var dbConnection = process.env.JAWSDB_URL || newConnection;

connection = mysql.createConnection(dbConnection);

// making initial connection

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// this file is required in orm to make connection
module.exports = connection;