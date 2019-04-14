const { createStore, combineReducers, applyMiddleware, compose } = require('redux');
var ReduxThunk = require('redux-thunk').default

import dataReducers from '../reducers/dataReducers';

const reducers = combineReducers({
  data: dataReducers
})

export default () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  )
  return store;
}
