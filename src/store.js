import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducer';
import { loadUserFromLocalStorage } from './components/login/actions';

const logger = createLogger();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.token)
  store.dispatch(loadUserFromLocalStorage());

export default store;
