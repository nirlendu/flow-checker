/**
 * Copyright - Nirlendu Saha
 */

var Enum = require('enum');

var ConstUrlsPreProduction = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'https://prod-api..com/v1/',
	'Static': {
		'Host': 'https://prod-assets..com',
		'Font': 'https://prod-assets..com/static/fonts/',
		'Media': 'https://prod-assets..com/static/img/',
		'Css': 'https://prod-assets..com/static/css/',
		'Js': 'https://prod-assets..com/static/js/',
		'App': {
			'Endpoint': 'https://prod-assets..com/static/img/app/',
			'PlaceholderImage450x300' : 'https://prod-assets..com/static/img/app/placeholder/placeholder.jpg',
			'PlaceholderImage540x350' : 'https://prod-assets..com/static/img/app/placeholder/placeholder-2.jpg',
			'PlaceholderImage600x300' : 'https://prod-assets..com/static/img/app/placeholder/placeholder-3.jpg'
		}
	},
	'Search' : 'https://prod..com/search?',
	'Listing' : {
		'Journeys' : 'https://prod..com/listing/journeys'
	},
	'Business' : 'https://prod..com/b/',
	'Fetch': {
		'Index': 'https://prod..com/api/index',
		'Listing': {
			'Journeys': 'https://prod..com/api/listing/journeys'
		},
		'Business': {
			'Index': 'https://prod..com/api/business/',
		},
		'Campaign': {
			'Index': 'https://prod..com/api/campaign/',
		}
	},
	'CORS' : 'https://cors-anywhere.herokuapp.com/'
}

module.exports = new Enum(ConstUrlsPreProduction).toJSON();