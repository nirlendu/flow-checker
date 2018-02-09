
/**
 * Copyright - Nirlendu Saha
 */

var Webpack = require('webpack');
var config = require('./common-config');

config.devtool =  'eval';
config.plugins.push(
	new Webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify('development')
        }
    })
);

module.exports = config;