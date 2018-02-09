/**
 * Copyright - Nirlendu Saha
 */
 
 // Environment Checks
require('checkenv').check();

// Ensuring $NODE_PATH is set
var enforceNodePath = require('enforce-node-path');
enforceNodePath(__dirname);

// Importing the configured server
require('app/server/app');