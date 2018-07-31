import {all} from 'redux-saga/effects';

import userSaga from '../../pages/User/user.sagas';

export default function* () {
  yield all([
    userSaga(),
  ]);
}