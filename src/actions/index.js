import axios from 'axios';
import * as constants from '../constants';

const baseUrl = 'https://api.themoviedb.org';

export const resetMoviesState = () => ({
  type: constants.RESET_MOVIES_STATE
});

export const discoverAllMovies = () => ({
  type: constants.DISCOVER_ALL_MOVIES
});

export const discoverPopular = () => ({
  type: constants.DISCOVER_POPULAR
});

export const discoverPopularSucceeded = data => ({
  type: constants.DISCOVER_POPULAR_SUCCEEDED,
  payload: data
});

export const discoverPopularFailed = error => ({
  type: constants.DISCOVER_POPULAR_FAILED,
  payload: error
});

export const discoverUpcoming = () => ({
  type: constants.DISCOVER_UP_COMING
});

export const discoverUpcomingSucceeded = data => ({
  type: constants.DISCOVER_UP_COMING_SUCCEEDED,
  payload: data
});

export const discoverUpcomingFailed = error => ({
  type: constants.DISCOVER_UP_COMING_FAILED,
  payload: error
});

export const discoverTopRated = () => ({
  type: constants.DISCOVER_TOP_RATED
});

export const discoverTopRatedSucceeded = data => ({
  type: constants.DISCOVER_TOP_RATED_SUCCEEDED,
  payload: data
});

export const discoverTopRatedFailed = error => ({
  type: constants.DISCOVER_TOP_RATED_FAILED,
  payload: error
});

export const discoverLatest = () => ({
  type: constants.DISCOVER_LATEST
});

export const discoverLatestSucceeded = data => ({
  type: constants.DISCOVER_LATEST_SUCCEEDED,
  payload: data
});

export const discoverLatestFailed = error => ({
  type: constants.DISCOVER_LATEST_FAILED,
  payload: error
});

export const getMovieDetail = () => ({
  type: constants.GET_MOVIES_DETAILS
});

export const getMovieDetailSucceeded = data => ({
  type: constants.GET_MOVIES_DETAILS_SUCCEEDED,
  payload: data
});

export const getMovieDetailFailed = error => ({
  type: constants.GET_MOVIES_DETAILS_FAILED,
  payload: error
});

export const searchMovies = query => ({
  type: constants.SEARCH_MOVIES,
  payload: query
});

export const searchMoviesSucceeded = data => ({
  type: constants.SEARCH_MOVIES_SUCCEEDED,
  payload: data
});

export const searchMoviesFailed = error => ({
  type: constants.SEARCH_MOVIES_FAILED,
  payload: error
});

export const getLatestMovies = (dispatch) => {
  return function action() {
    dispatch({ type: constants.DISCOVER_LATEST });
    const request = axios({
      method: 'GET',
      url: `${baseUrl}/3/discover/movie`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        sort_by: 'release_date.desc',
        release_date: {
          lte: '2019'
        }
      },
      headers: []
    });
    
    return request.then(
      response => dispatch(discoverLatestSucceeded(response.data)),
      err => dispatch(discoverLatestFailed(err))
    );
  }
};
