var redux = require('redux');
var thunk = require('redux-thunk').default;
var {roomReducer, summaryReducer} = require('reducers');

const rootReducer = redux.combineReducers({
  model: roomReducer,
  summary: summaryReducer
});

export var configure = (initialState={})=>{

  //weird
  var store = redux.createStore(rootReducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
