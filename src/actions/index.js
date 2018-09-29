import * as constants from '../constants';

export const resetMoviesState = () => ({
  type: constants.RESET_MOVIES_STATE
});

export const discoverMovies = () => ({
  type: constants.DISCOVER_MOVIES
});

export const discoverMoviesSucceeded = data => ({
  type: constants.DISCOVER_MOVIES_SUCCEEDED,
  payload: { data }
});

export const discoverMoviesFailed = error => ({
  type: constants.DISCOVER_MOVIES_FAILED,
  payload: { error }
});

export const getMovieDetail = () => ({
  type: constants.GET_MOVIES_DETAILS
});

export const getMovieDetailSucceeded = data => ({
  type: constants.GET_MOVIES_DETAILS_SUCCEEDED,
  payload: { data }
});

export const getMovieDetailFailed = error => ({
  type: constants.GET_MOVIES_DETAILS_FAILED,
  payload: { error }
});

export const searchMovies = query => ({
  type: constants.SEARCH_MOVIES,
  payload: { query }
});

export const searchMoviesSucceeded = data => ({
  type: constants.SEARCH_MOVIES_SUCCEEDED,
  payload: { data }
});

export const searchMoviesFailed = error => ({
  type: constants.SEARCH_MOVIES_FAILED,
  payload: { error }
});
