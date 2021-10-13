import AllUsersActions from './actions.types';

const initialState = {
    loading: true,
    error: false,
    allUsers: [],
};

export default function allUsersReducer(state = initialState, action) {
    switch (action.type) {
        case AllUsersActions.FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case AllUsersActions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                allUsers: action.payload
            }
        case AllUsersActions.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return initialState
    }
}