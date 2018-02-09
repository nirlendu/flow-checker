/**
 * Copyright - Nirlendu Saha
 */

var webpackConfig = null;

if (process.env.NODE_ENV == 'development'){
    webpackConfig = require('./webpack/development');
} else if (process.env.NODE_ENV == 'testing'){
    webpackConfig = require('./webpack/testing');
} else if (process.env.NODE_ENV == 'staging'){
    webpackConfig = require('./webpack/staging');
} else if (process.env.NODE_ENV == 'pre-production'){
    webpackConfig = require('./webpack/pre-production');
} else if (process.env.NODE_ENV == 'production'){
    webpackConfig = require('./webpack/production');
} else {
    webpackConfig = null;
}

module.exports = webpackConfig;