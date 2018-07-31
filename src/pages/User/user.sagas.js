import {all, put, call, fork} from 'redux-saga/effects';
import User from "../../services/User";
import {getUserError, receiveUser} from "./user.actions";

function* getUser() {
  try {
    const data = yield call(User.getData);
    yield put(receiveUser(data.data));
  } catch (e) {
    yield put(getUserError(e));
  }
}

export default function* () {
  yield all([
    fork(getUser),
  ]);
}