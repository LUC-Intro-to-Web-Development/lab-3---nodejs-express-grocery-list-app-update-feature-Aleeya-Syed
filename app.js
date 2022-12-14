// Aleeya Syed

const express = require('express')
const dbOperations = require('./database.js');
const app = express()
const port = 3000

/**To serve static files such as images, CSS files, and JavaScript files, create a folders
* and include the below statement.  The below statement assumes that I have a folder named assets
**/
app.use(express.static('assets'))

// view engine setup
app.set("view engine", "hbs");

// parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Rout to  home
app.get('/', function (req, res) {
	
	dbOperations.getAllItems(res);

})

// Route to create a grocery list item
 app.post('/create_item', function (req, res) {
	//Getting body parameters
	const { item_name, item_count} =req.body;

	//Execute creatItems method
	dbOperations.createItem(item_name, item_count, res);

	
 })

  // Route to update a grocery list item
  app.post('/update_item', function (req, res) {
	//Getting body parameters
	const { updaterecordID} = req.body;

	dbOperations.getAItem(updaterecordID, res);

})

 // Route to delete a grocery list item
 app.post('/delete_item', function (req, res) {
	//Getting body parameters
	const { deleterecord} = req.body;
	dbOperations.deleteItem(deleterecord, res);
	
 })

/* Test to make the update route is working
app.post('/update_item', function (req, res) {
	console.log("This is the update item route");

})*/
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))