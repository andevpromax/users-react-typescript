import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../../utils/api';
import { GET_USERS_REQUEST } from '../users/constants';
import { getUsersSuccess, getUsersError } from '../users/actions';

function* getUsers() {
  try {
    const users = yield call(api.users.getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError);
  }
}

function* sagaUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
  // yield takeEvery(GET_USERS_REQUEST, getUsers);
}

export default sagaUsers;
