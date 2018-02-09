/**
 * Copyright - Nirlendu Saha
 */

if (process.env.NODE_ENV == 'development'){
	module.exports = require('app/config/url/development');
}
if (process.env.NODE_ENV == 'pre-production'){
	module.exports = require('app/config/url/pre-production');
}
if (process.env.NODE_ENV == 'production'){
	module.exports = require('app/config/url/production');
}