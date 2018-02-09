#!/bin/bash

if [ $1 == "testing" -o $1 == "development" -o $1 == "staging" -o $1 == "pre-production" -o $1 == "production" ];
then
	export NODE_ENV=$1
	export NODE_PATH="." 

	if [ "$1" = "development" ]; then
		export PORT="3000"
		export DEBUG="true"
		nodemon server.js
	fi

	if [ "$1" = "testing" ]; then
		export PORT="3000"
		export DEBUG="true"
		nodemon server.js
	fi

	if [ "$1" = "staging" ]; then
		export PORT="4444"
		export DEBUG="false"
		nodemon server.js
	fi

	if [ "$1" = "pre-production" ]; then
		export PORT="3000"
		export DEBUG="false"
		sudo npm install
		pm2 delete all
		pm2 start pm2/pre-production.json
	fi

	if [ "$1" = "production" ]; then
		export PORT="3000"
		export DEBUG="false"
		sudo npm install
		pm2 delete all
		pm2 start pm2/production.json
	fi
else
	echo "Please enter one of the following - testing, development, staging, pre-production, production"
fi