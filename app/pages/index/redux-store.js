/**
 * Copyright - Nirlendu Saha
 */

var createStore = require('redux').createStore;

var reducer = function(state, action) {
    if(state === undefined) {
        return {};
    }
    return state;
}

module.exports = {
    configureStore: function(initialState) {
        return createStore(reducer, initialState)
    }
}
