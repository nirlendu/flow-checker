
/**
 * Copyright - Nirlendu Saha
 */

var Webpack = require('webpack');
var config = require('./common-config');

config.devtool =  'source-map';
config.plugins.push(
	new Webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify('production')
        }
    })
);

module.exports = config;