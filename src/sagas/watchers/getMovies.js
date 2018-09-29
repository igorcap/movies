import { takeLatest } from 'redux-saga/effects';

import * as constants from '../../constants';

function* workerGetUsersSaga() {
}

export default function* watchGetUsersSaga() {
  yield takeLatest(constants.DISCOVER_MOVIES_FAILED, workerGetUsersSaga);
}
