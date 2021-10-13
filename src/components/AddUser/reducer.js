import AddUserActions from './actions.types';

const initialState = {
    loading: true,
    error: false,
    errorMessage: '',
    success: false,
    newUser: {
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: ''
    },
};

export default function addUserReducer(state = initialState, action) {
    switch (action.type) {
        case AddUserActions.ADD_USER:
            return {
                ...state,
                loading: true,
                newUser: { ...action.payload }
            }
        case AddUserActions.ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true
            }
        case AddUserActions.ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.errors[0].message
            }
        default:
            return initialState
    }
}