import AllUsersActions from './actions.types';

export function fetchAllUsers() {
    return {
        type: AllUsersActions.FETCH_USERS
    }
}

export function fetchAllUsersSuccess(data) {
    return {
        type: AllUsersActions.FETCH_USERS_SUCCESS,
        payload: data
    }
}

export function fetchAllUsersFailure(data) {
    return {
        type: AllUsersActions.FETCH_USERS_FAILURE,
        payload: data
    }
}