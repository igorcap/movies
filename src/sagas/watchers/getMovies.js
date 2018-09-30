import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import * as constants from '../../constants';
import * as actions from '../../actions';

const baseUrl = 'https://api.themoviedb.org';

function* workerDiscoverLatestMoviesSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'release_date.desc',
      release_date: {
        lte: '2018'
      }
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
  yield put(actions.discoverLatestSucceeded(response));
}

function* workerDiscoverPopularSaga() {
  const response = yield axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'vote_average.desc'
    }
  }).then(res => res.data);
  yield put(actions.discoverLatestSucceeded(response));
}

export function* watchGetLatestSaga() {
  yield takeLatest(constants.DISCOVER_LATEST, workerDiscoverLatestMoviesSaga);
}

export function* watchGetPopularSaga() {
  yield takeLatest(constants.DISCOVER_POPULAR, workerDiscoverPopularSaga)
}

export function* watchGetTopRatedSaga() {
  yield takeLatest(constants.DISCOVER_TOP_RATED, workerDiscoverTopRatedSaga)
}