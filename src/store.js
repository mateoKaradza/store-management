import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './reducers/index';
import { loadUserFromLocalStorage } from './components/login/actions';

const logger = createLogger();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.token)
  store.dispatch(loadUserFromLocalStorage());

export default store;
