import {AuthAPI, ProfileAPI, UserPayloadType} from "../API/API";
import {Dispatch} from "redux";
import {IProfile} from "./Profile-reducer";

const SET_USER_AUTH_DATA = 'Auth-reducer/SET_USER_AUTH_DATA';
const SET_USER_PROFILE = 'Auth-reducer/SET_USER_PROFILE';

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    authProfile: IProfile | null
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authProfile: null
}

const authReducer = (state = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                authProfile: action.profile
            }

        default:
            return state;
    }
}

type ActionTypes = TSetAuthUserData | TSetUserProfile

export type TSetAuthUserData = {
    type: typeof SET_USER_AUTH_DATA
    payload: UserPayloadType
    isAuth: boolean
}

type TSetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: IProfile
}

export const setAuthUserData = (payload: UserPayloadType, isAuth: boolean): TSetAuthUserData => (
    {type: SET_USER_AUTH_DATA, payload, isAuth}
);

const setAuthUserProfile = (profile: IProfile): TSetUserProfile => ({type: SET_USER_PROFILE, profile});


export const getAuthUserData = () =>
    async (dispatch: Dispatch<ActionTypes | TSetUserProfile>) => {
        try {
            const res = await AuthAPI.getAuth()
            dispatch(setAuthUserData(res.data, res.resultCode === 0));
            const userRes = await ProfileAPI.getProfile(Number(res.data.id));
            dispatch(setAuthUserProfile(userRes))
        } catch (err) {
            console.log(err.message)
        }
    }

export default authReducer;