/**
 * Copyright - Nirlendu Saha
 */

var React = require('react');
var ReactDOM = require('react-dom');
var store = require('app/pages/index/redux-store');
var ReactRouter = require('react-router');
var match = ReactRouter.match;

var RouterContext = React.createFactory(ReactRouter.RouterContext);
var Provider = React.createFactory(require('react-redux').Provider);

var routes = require('app/config/routes').routes;

var mountNode = document.getElementById('react-mount');

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

var storeContainer = store.configureStore(preloadedState);

match({routes: routes, location: '/'}, function(error, redirectLocation, renderProps) {
    if (error) {
         // TODO
    }
    ReactDOM.render(
        Provider({store: storeContainer}, RouterContext(renderProps)),
        mountNode
    );
});
