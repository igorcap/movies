import * as constants from '../constants';

const initialState = {
  discover: {
},
  search: {
    query: '',
    result: {}
  },
  movieDetails: {},
  erros: {},
  loading: false
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case constants.DISCOVER_LATEST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        discover: {
          latest: action.payload
        }
      }
    case constants.GET_MOVIES_DETAILS_SUCCEEDED:
    case constants.SEARCH_MOVIES_SUCCEEDED:
    case constants.SEARCH_MOVIES:
    case constants.DISCOVER_LATEST:
    case constants.GET_MOVIES_DETAILS:
    default:
      return state;
  }
}

