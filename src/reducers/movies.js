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
  loading: false 
});

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case constants.DISCOVER_MOVIES: 
    default:
      return state;
  }
}
