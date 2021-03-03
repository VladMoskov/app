const SET_USER_AUTH_DATA = 'Auth-reducer/SET_USER_AUTH_DATA';

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {
                ...action.payload,
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}


export type payloadType = {
    id: number | null
    email: string | null
    login: string | null
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_AUTH_DATA
    payload: payloadType
    isAuth: boolean
}

export const setAuthUserData = (payload: payloadType, isAuth: boolean): setAuthUserDataActionType => (
    {type: SET_USER_AUTH_DATA, payload, isAuth}
);

export default authReducer;