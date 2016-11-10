var express =  require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// this is coming from controllers folder
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes); //this is the route which would be ad a default in front of every route so if we have app.use('/api') so api would be used
// in front of any other route create. Its a default route


var port = process.env.PORT || 3000;
app.listen(port);
