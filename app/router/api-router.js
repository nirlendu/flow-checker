/**
 * Copyright - Nirlendu Saha
 */


/******************
 *
 *
 * Flow of the router config, () signifies next in the heirarchy
 * 
 * api-router --> (static-router) --> (place-rouer) --> (payment-router) --> (main-router)
 *
 *
 *******************/


// Imports
const express = require('express');
const fs = require('fs');    
const path = require('path');
const url = require('url');
const includes = require('lodash/includes');
const request = require('superagent');

const Url = require('app/config/core/url');

// Initializing the router
const router = express.Router();

router.get('/api/index', function(req, res) {
	request
	.get(Url.Api + 'index/' + req.params.code)
	.end(function(error, response){
		res.json(response.body);
	})
});

if (process.env.LOCAL == 'true'){
	module.exports = require('app/router/local-router');
} else {
	module.exports = router;
}