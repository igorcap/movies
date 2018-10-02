import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';

import * as constants from '../../constants';
import * as actions from '../../actions';

const baseUrl = 'https://api.themoviedb.org';

function* workerDiscoverLatestMoviesSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc',
      year: '2018'
    }
  }).then(res => res.data);
  yield put(actions.discoverLatestSucceeded(response));
}

function* workerDiscoverTopRatedSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'vote_average.desc'
    }
  }).then(res => res.data);
  yield put(actions.discoverTopRatedSucceeded(response));
}

function* workerDiscoverPopularSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc'
    }
  }).then(res => res.data);
  yield put(actions.discoverPopularSucceeded(response));
}

function* workerDiscoverUpComingSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc',
      year: '2019'
    }
  }).then(res => res.data);
  yield put(actions.discoverUpcomingSucceeded(response));
}

function* workerGetMovieDetailSaga(data) {
  const id = data.payload;
  const response = yield axios.get(`${baseUrl}/3/movie/${id}`, {
    params: { api_key: process.env.REACT_APP_API_KEY }
  }).then(res => res.data);
  yield put(push('/details'));
  yield put(actions.getMovieDetailSucceeded(response));
}


function* workerDiscoverAllSaga() {
  yield all([
    workerDiscoverLatestMoviesSaga(),
    workerDiscoverPopularSaga(),
    workerDiscoverTopRatedSaga(),
    workerDiscoverUpComingSaga()
  ]);
}

export function* watchGetLatestSaga() {
  yield takeLatest(constants.DISCOVER_LATEST, workerDiscoverLatestMoviesSaga);
}

export function* watchGetPopularSaga() {
  yield takeLatest(constants.DISCOVER_POPULAR, workerDiscoverPopularSaga);
}

export function* watchGetTopRatedSaga() {
  yield takeLatest(constants.DISCOVER_TOP_RATED, workerDiscoverTopRatedSaga);
}

export function* watchGetUpComingSaga() {
  yield takeLatest(constants.DISCOVER_UP_COMING, workerDiscoverUpComingSaga);
}

export function* watchDiscoverAllSaga() {
  yield takeLatest(constants.DISCOVER_ALL_MOVIES, workerDiscoverAllSaga);
}

export function* watchGetMovieDetailSaga() {
  yield takeLatest(constants.GET_MOVIES_DETAILS, workerGetMovieDetailSaga);
}
