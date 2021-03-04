import {AuthAPI} from "../API/API";
import {Dispatch} from "redux";

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

const authReducer = (state = initialState, action: ActionTypes): initialStateType => {

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

type ActionTypes = setAuthUserDataActionType

export type UserPayloadType = {
    id: number | null
    email: string | null
    login: string | null
}

export type setAuthUserDataActionType = {
    type: typeof SET_USER_AUTH_DATA
    payload: UserPayloadType
    isAuth: boolean
}

export const setAuthUserData = (payload: UserPayloadType, isAuth: boolean): setAuthUserDataActionType => (
    {type: SET_USER_AUTH_DATA, payload, isAuth}
);

interface IResponse {
    data: {
        resultCode: number
        messages: string[]
        data: UserPayloadType
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionTypes>) => {
    (AuthAPI.getAuth() as Promise<IResponse>).then((res) => {
            dispatch(setAuthUserData(res.data.data, res.data.resultCode === 0))
        }
    )
}

export default authReducer;