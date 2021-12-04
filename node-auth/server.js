const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const MongoInit = require('./config/mongodb');
const hbs = require('hbs');
const PORT = 8000;


// Connecting to MongoDB database
MongoInit();

const app = express()

// cookie-parser
app.use(cookie());

// setting path for static files
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

// Setting up view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routers
app.use('/auth', router);


app.listen(PORT, () => {
	console.log('Server listening at ${PORT}');
})
