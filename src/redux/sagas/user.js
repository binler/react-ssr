import {takeLatest, all, fork} from 'redux-saga/effects';

function* requestData() {
  yield takeLatest('this_is_action', function* (action) {
    yield console.log(action);
  })
}

export default function* () {
  yield all([
    fork(requestData)
  ])
}