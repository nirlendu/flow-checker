/**
 * Copyright - Nirlendu Saha
 */

import React from 'react'

import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import App from 'app/pages/App'

import Index from 'app/pages/index/Page'

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS} />;
    }
}

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
            <IndexRoute component={Index}/>
		</Route>
    </Router>
)

module.exports = {
  routes: routes
}
