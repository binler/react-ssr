import {all, put, call, fork, takeLatest} from 'redux-saga/effects';
import User from "../../services/User";
import {getUserError, receiveUser} from "./user.actions";
import UserConstants from "./user.constants";

function* getUser() {
  yield takeLatest(UserConstants.REQUEST_DATA, function* (action) {
    try {
      const data = yield call(User.getData);
      yield put(receiveUser(data));
    } catch (e) {
      yield put(getUserError(e));
    }
  });
}

export default function* () {
  yield all([
    fork(getUser),
  ]);
}