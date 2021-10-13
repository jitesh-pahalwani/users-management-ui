import { all } from 'redux-saga/effects';
import addUserSaga from './components/AddUser/saga';
import allUsersSaga from './components/AllUsers/saga';

export default function* rootSaga() {
    yield all([addUserSaga(), allUsersSaga()]);
}