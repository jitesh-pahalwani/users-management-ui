import AddUserActions from './actions.types';

export function addNewUser(data) {
    return {
        type: AddUserActions.ADD_USER,
        payload: data
    }
}

export function addNewUserSuccess(data) {
    return {
        type: AddUserActions.ADD_USER_SUCCESS,
        payload: data
    }
}

export function addNewUserFailure(data) {
    return {
        type: AddUserActions.ADD_USER_FAILURE,
        payload: data
    }
}