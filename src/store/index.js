/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer, { websocketConnect } from 'src/store/reducer';
import socketMiddleware from 'src/store/socketMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(socketMiddleware),
);

/**
 * Store
 */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  enhancers,
);
/* eslint-enable */

store.dispatch(websocketConnect());

/**
 * Export
 */
export default store;
