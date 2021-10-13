import { put, takeEvery } from 'redux-saga/effects';

import AddUserActions from './actions.types';
import { BASE_URL } from '../../constants';

function* addNewUser(action) {
    try {
        let newUserObject = JSON.stringify(action.payload);

        const apiResult = yield fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: newUserObject
        }).then(res => res.json());
        if (apiResult.errors) {
            throw apiResult;
        }
        yield put({
            type: AddUserActions.ADD_USER_SUCCESS, payload: apiResult
        });
    } catch (err) {
        yield put({
            type: AddUserActions.ADD_USER_FAILURE, payload: err
        });
    }
}

export default function* allUsersSaga() {
    yield takeEvery(AddUserActions.ADD_USER, addNewUser);
}