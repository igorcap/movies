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
          ...state.discover,
          latest: action.payload
        }
      };
    case constants.DISCOVER_POPULAR_SUCCEEDED:
      return {
        ...state,
        loading: false,
        discover: {
          ...state.discover,
          popular: action.payload
        }
      };
    case constants.DISCOVER_TOP_RATED_SUCCEEDED:
      return {
        ...state,
        loading: false,
        discover: {
          ...state.discover,
          topRated: action.payload
        }
      };
    case constants.DISCOVER_UP_COMING_SUCCEEDED:
      return {
        ...state,
        loading: false,        
        discover: {
          ...state.discover,
          upcoming: action.payload
        }
      };
    case constants.GET_MOVIES_DETAILS_SUCCEEDED:
    case constants.SEARCH_MOVIES_SUCCEEDED:
    case constants.SEARCH_MOVIES:
    case constants.DISCOVER_LATEST:
    case constants.GET_MOVIES_DETAILS:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

