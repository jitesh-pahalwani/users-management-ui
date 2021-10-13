import { combineReducers } from 'redux';
import addUserReducer from './components/AddUser/reducer';
import allUsersReducer from './components/AllUsers/reducer';

const mainReducer = combineReducers({
    addUserReducer: addUserReducer,
    allUsersReducer: allUsersReducer,
});

export default mainReducer