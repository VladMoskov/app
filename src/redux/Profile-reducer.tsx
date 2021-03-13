import {ProfileAPI} from "../API/API";
import {Dispatch, Reducer} from "redux";

const ADD_POST = 'Profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'Profile-reducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'Profile-reducer/SET_USER_STATUS';

export interface IInitialState {
    postsData: {
        id: number
        text: string
        likesCount: number
    }[]

    profile: IProfile | null

    userStatus: string
}

export type TContacts = {
    github: string
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export interface IProfile {
    userId?: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    aboutMe: string | null

    contacts: TContacts
    photos?: {
        small: string | null
        large: string | null
    }
}

let initialState = {
    postsData: [
        {id: 1, text: 'May the force be with you', likesCount: 11}
    ],
    profile: null,
    userStatus: ''
}

const profileReducer: Reducer<IInitialState, ActionsTypes> = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {
                        id: state.postsData.length,
                        text: action.text,
                        likesCount: 0
                    }
                ]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }

        default:
            return state;
    }
}

type ActionsTypes = TAddNewPostType | TSetUserProfile | TSetUserStatus;

type TAddNewPostType = {
    type: typeof ADD_POST
    text: string
}
type TSetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: IProfile
}
type TSetUserStatus = {
    type: typeof SET_USER_STATUS
    status: string
}

export const addNewPost = (text: string): TAddNewPostType => ({type: ADD_POST, text});
export const setUserProfile = (profile: IProfile): TSetUserProfile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status: string): TSetUserStatus => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId: number) =>
    async (dispatch: Dispatch<TSetUserProfile>) => {
        try {
            const res = await ProfileAPI.getProfile(userId)
            dispatch(setUserProfile(res));
        } catch (err) {
            console.log(err.message);
        }
    }

export const getUserStatus = (userId: number) =>
    async (dispatch: Dispatch<TSetUserStatus>) => {
        try {
            const res = await ProfileAPI.getStatus(userId);
            dispatch(setUserStatus(res));
        } catch (err) {
            console.log(err.message);
        }
    }

export const updateUserStatus = (status: string) =>
    async (dispatch: Dispatch<TSetUserStatus>) => {
        try {
            const res = await ProfileAPI.updateStatus(status)
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status))
        } catch (err) {
            console.log(err.message);
        }
    }

export const updateProfile = (profile: IProfile, id: number | undefined) =>
    async (dispatch: Dispatch<TSetUserProfile>) => {
        try {
            await ProfileAPI.updateProfile(profile)
            const res = await ProfileAPI.getProfile(id)
            dispatch(setUserProfile(res))
        } catch (err) {
            console.log(err.message);
        }
    }

export default profileReducer;