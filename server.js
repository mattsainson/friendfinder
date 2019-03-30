var express = require('express');
var moment = require('moment');
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'app/public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log("App now listening on:" + PORT + ' at '+moment().format());
});
