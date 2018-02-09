/**
 * Copyright - Nirlendu Saha
 */


/******************
 *
 *
 * Flow of the router config, () signifies next in the heirarchy
 * 
 * local-router --> (static-router) --> (place-rouer) --> (payment-router) --> (main-router)
 *
 *
 *******************/


// Imports
const express = require('express');
const fs = require('fs');    
const path = require('path');
const url = require('url');
const includes = require('lodash/includes');

// Initializing the router
const router = express.Router();

router.get('/api/index', function(req, res) {
	
	const IndexFile = path.join('schema/index.json');  
	fs.readFile(IndexFile, function(err, data) {
		if (err) {
			console.error(err);
			res.json({});
			res.end();
		}else{
			res.json(JSON.parse(data).data);
		}
	});
});

module.exports = router;
