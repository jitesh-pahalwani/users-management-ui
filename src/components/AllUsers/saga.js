import { put, takeEvery } from 'redux-saga/effects';

import AllUsersActions from './actions.types';
import { BASE_URL } from '../../constants';

function* fetchAllUsers() {
    try {
        const apiResult = yield fetch(`${BASE_URL}/users`).then(res => res.json());
        yield put({
            type: AllUsersActions.FETCH_USERS_SUCCESS, payload: apiResult
        });
    } catch (err) {
        yield put({
            type: AllUsersActions.FETCH_USERS_FAILURE, payload: err
        });
    }
}

export default function* allUsersSaga() {
    yield takeEvery(AllUsersActions.FETCH_USERS, fetchAllUsers);
}