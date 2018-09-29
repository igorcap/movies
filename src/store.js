import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';
import sagas from './sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();
const enhancers = [];
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  persistedState,
  composedEnhancers
);

store.subscribe(throttle(() => {
  saveState({ movies: store.getState() });
}, 1000));

sagaMiddleware.run(sagas);

export default store;
