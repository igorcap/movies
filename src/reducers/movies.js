import { Map, fromJS } from 'immutable';
import * as constants from '../constants';

const initialState = Map({
  discover: {
    topRated: {},
    upcoming: {},
    nowPlaying: {},
    popular: {},
  },
  search: {
    query: '',
    result: {}
  },
  movieDetails: {},
  erros: {},
  loading: false
});

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case constants.DISCOVER_MOVIES_SUCCEEDED:
      return state.set('discover', fromJS(action.payload.data));
    case constants.GET_MOVIES_DETAILS_SUCCEEDED:
      return state.set('movieDetails', fromJS(action.payload.data));
    case constants.SEARCH_MOVIES_SUCCEEDED:
      return state.setIn(['search', 'result'], fromJS(action.payload.data));
    case constants.SEARCH_MOVIES:
    case constants.DISCOVER_MOVIES:
    case constants.GET_MOVIES_DETAILS:
      return state.set('loading', true);
    default:
      return state;
  }
}
