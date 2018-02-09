/**
 * Copyright - Nirlendu Saha
 */

var Enum = require('enum');

var ConstUrlsProduction = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'http://localhost:9000/v1/',
	'Static': {
		'Host': 'https://docsapp..com',
		'Font': '/assets/fonts/',
		'Media': '/assets/img/',
		'Css': '/assets/css/',
		'Js': 'https://assets..com/static/docsapp/',
		'App': {
			'Endpoint': '/assets/img/app/',
			'PlaceholderImage450x300' : '/assets/img/app/placeholder/placeholder.jpg',
			'PlaceholderImage540x350' : '/assets/img/app/placeholder/placeholder-2.jpg',
			'PlaceholderImage600x300' : '/assets/img/app/placeholder/placeholder-3.jpg',
		}
	},
	'Select': 'https://docsapp..com/api/select/',
	'Fetch': {
		'Driver': 'https://docsapp..com/api/driver/',
		'Dashboard': 'https://docsapp..com/api/dashboard',
	},
	'Post': {
		'Customer': 'https://docsapp..com/api/customer',
	}
}

module.exports = new Enum(ConstUrlsProduction).toJSON();