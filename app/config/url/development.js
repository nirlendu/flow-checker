/**
 * Copyright - Nirlendu Saha
 */

var Enum = require('enum');

var ConstUrlsDev = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'http://localhost:9000/v1/',
	'Static': {
		'Host': 'http://localhost:3000',
		'Font': '/assets/fonts/',
		'Media': '/assets/img/',
		'Css': '/assets/css/',
		'Js': '/assets/js/',
		'App': {
			'Endpoint': '/assets/img/app/',
		}
	},
	Fetch:{
		'Index' : 'http://localhost:3000/api/index'
	}
}

module.exports = new Enum(ConstUrlsDev).toJSON();