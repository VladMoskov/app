const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
                }

        default:
            return state;
    }
}

export const setAuthUserData = (data, isAuth) => ({type: SET_USER_AUTH_DATA, data, isAuth});

export default authReducer;