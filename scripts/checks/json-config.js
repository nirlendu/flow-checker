/**
 * Copyright - Nirlendu Saha
 */

function compareKeys(a, b) {
	var aKeys = Object.keys(a).sort();
	var bKeys = Object.keys(b).sort();
	return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}

function compareKeysOfConfig(dev, preProd, prod) {
	if(compareKeys(dev, preProd)){
		if(compareKeys(dev, prod)){
			console.log('All config JSON prefect');
			return true;
		}
		console.log('Dev and Prod dont match');
		return false;
	}
	console.log('Dev and Pre-Prod dont match');
	return false;
}

JSONDev = require('../../app/config/url/development');
JSONPreProd = require('../../app/config/url/pre-production');
JSONProd = require('../../app/config/url/production');

console.log('###########');
compareKeysOfConfig(JSONDev, JSONPreProd, JSONProd);
console.log('###########');
console.log('\n');