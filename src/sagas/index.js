import { all, fork } from 'redux-saga/effects';

import watchGetMoviesSaga from './watchers/getMovies';

export default function* root() {
  yield all([
    fork(watchGetMoviesSaga),
  ]);
}
