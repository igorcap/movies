import { takeLatest } from 'redux-saga/effects';

import * as constants from '../../constants';
import * as actions from '../../actions';
import * as api from '../../api';

function* workerDiscoverMoviesSaga() {
  console.log('teste');
  api.getLatestMovies();
}

export default function* watchGetUsersSaga() {
  yield takeLatest(constants.DISCOVER_MOVIES, workerDiscoverMoviesSaga);
}
