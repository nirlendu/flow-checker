/**
 * Copyright - Nirlendu Saha
 */


/******************
 *
 *
 * Flow of the router config, () signifies next in the heirarchy
 * 
 * api-router --> static-router --> place-rouer --> payment-router --> main-router
 *
 *
 *******************/


// Import external libraries
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Helmet = require('react-helmet');
const request = require('superagent');
const StyleSheetServer = require('aphrodite').StyleSheetServer;
const fs = require('fs');

require('babel-core/register')({
	presets: ['es2015', 'react']
});

const match = ReactRouter.match;
const RouterContext = React.createFactory(ReactRouter.RouterContext);
const Provider = React.createFactory(require('react-redux').Provider);

const compressor = require('app/utils/es6-compressor');
// const logger = require('app/utils/logger');
const Url = require('app/config/core/url');
// const Keys = require('app/config/core/keys');

const routes = require('app/config/routes.js').routes;

const router = require('app/router/api-router');

const AssetName = JSON.parse(fs.readFileSync('manifest.json'));
const commonJs = Url.Static.Js + AssetName['common.js'];


router.get('/', function(req, res) {
	
	let store = require('app/pages/index/redux-store');
	const requestUrl = Url.Fetch.Index;

	request
		.get(requestUrl)
		.end(function(error, response){

		if (error) {
			//TODO
		}

		if (JSON.stringify(response.body)=='{}'){
			//Empty Json check == Wrong code
			res.redirect(302,'/');
		}else{

		const initialState = {
			data : response.body,
		}
		store = store.configureStore(initialState);

		match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
			if (error) {
				res.status(500).send(error.message)
			} else if (redirectLocation) {
				res.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {

				const {html, css} = StyleSheetServer.renderStatic(() => {
					return ReactDOMServer.renderToString(
						Provider({store: store}, RouterContext(renderProps))
					);
				});
				const preloadedState = store.getState();
				const head = Helmet.rewind();
				const pageJs = Url.Static.Js + AssetName['index.js'];
				const pageTitle = 'Code';
				const webPage = compressor`
					<!doctype html>
					<html>
						<head>
							<meta charset="utf-8" />
							<title>${pageTitle}</title>
							<title>${head.title}</title>
							${head.meta.toString()}
							${head.link.toString()}
							${head.style.toString()}
							${head.script.toString()}
							<style data-aphrodite>${css.content}</style>
						</head>
						<body>
							<div id="react-mount">${html}</div>
							<script>
								window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
							</script>
							<script src=${commonJs}></script>
							<script src=${pageJs}></script>
						</body>
					</html>
				`;
				res.header('Content-Type', 'text/html');
				res.write(webPage);
				res.end();	

			} else {
				res.status(404).send('Not found')
			}
		});
		}
	}); 
});

module.exports = router;