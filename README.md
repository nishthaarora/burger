**App using Node Express Handlebars**

Overview

In this assignment, i have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Have followed the MVC design pattern; using Node and MySQL to query and route data in my app, and Handlebars to generate my HTML.

**About the App**

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, my app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

MY app will store every burger in a database, whether devoured or not.

**NPM packages user:**

The following npm packages are inside of the server.js file:

**Directory structure:**

All the recommended files and directories from the steps above should look like the following structure:

	├── config
	│   ├── connection.js
	│   └── orm.js
	│ 
	├── controllers
	│   └── burgers_controller.js
	│
	├── db
	│   ├── schema.sql
	│   └── seeds.sql
	│
	├── models
	│   └── burger.js
	│ 
	├── node_modules
	│ 
	├── package.json
	│
	├── public
	│   ├── assets
	│   │   ├── css
	│   │   │   └── burger_style.css
	│   │   └── img
	│   │       └── burger.png
	│   └── test.html
	│
	├── server.js
	│
	└── views
    	├── index.handlebars
    	└── layouts
        	└── main.handlebars