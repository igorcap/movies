import { all, fork } from 'redux-saga/effects';

import {
  watchGetLatestSaga,
  watchGetPopularSaga,
  watchGetTopRatedSaga,
  watchGetUpComingSaga,
  watchDiscoverAllSaga
} 
  from './watchers/getMovies';

export default function* root() {
  yield all([
    fork(watchGetLatestSaga),
    fork(watchGetPopularSaga),
    fork(watchGetTopRatedSaga),
    fork(watchGetUpComingSaga),
    fork(watchDiscoverAllSaga)
  ]);
}
