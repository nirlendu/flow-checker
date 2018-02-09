/**
 * Copyright - Nirlendu Saha
 */
  
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// var Raven = require('raven');

// // Must configure Raven before doing anything else with it
// Raven.config('https://c50eb02b45e84facb3607b15d109ca7c@sentry.io/145177').install();

// // The request handler must be the first middleware on the app
// app.use(Raven.requestHandler());

// // The error handler must be before any other error middleware
// app.use(Raven.errorHandler());

// Configuring the App
app.set('port', (process.env.PORT || 3000));

if (process.env.NODE_ENV=='development'){
	// Static URL
	app.use('/assets/', express.static(path.resolve('../assets/static/')));
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
        // Set permissive CORS header - this allows this server to be used only as
        // an API server in conjunction with something like webpack-dev-server.
        res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        // Disable caching so we'll always get the latest comments.
        res.setHeader('Cache-Control', 'no-cache');
        next();
});

// Connecting to the app router
var router = require('app/router/main-router');
app.use('/', router);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
	res.redirect(302,'/oops/404');
});

// Debug when the server starts
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

module.exports = app;