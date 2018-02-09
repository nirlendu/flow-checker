#!/bin/bash

if [ $1 == "testing" -o $1 == "development" -o $1 == "staging" -o $1 == "pre-production" -o $1 == "production" ];
then
	npm run test
	if [ $1 == "testing" -o $1 == "development" -o $1 == "staging" ]; then
		npm run dev
	fi
	export NODE_ENV=$1
	if [ $1 == "pre-production" ]; then
		npm run clean
		node_modules/.bin/webpack -p --config webpack.config.js
	fi
	if [ $1 == "production" ]; then
		npm run clean
		node_modules/.bin/webpack -p --config webpack.config.js
	fi
else
	echo "Please enter one of the following - testing, development, staging, pre-production, production"
fi