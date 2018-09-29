import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import moviesReducer from './movies';

export default combineReducers({
  routing: routerReducer,
  moviesReducer
});
