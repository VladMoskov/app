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

export interface IProfile {
    userId: number
    lookingForAJob: string | null
    lookingForAJobDescription: string | null
    fullName: string | null

    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
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

type ActionsTypes = AddNewPostType | SetUserProfile | SetUserStatus;

type AddNewPostType = {
    type: typeof ADD_POST
    text: string
}
type SetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: IProfile
}
type SetUserStatus = {
    type: typeof SET_USER_STATUS
    status: string
}

export const addNewPost = (text: string): AddNewPostType => ({type: ADD_POST, text});
export const setUserProfile = (profile: IProfile): SetUserProfile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status: string): SetUserStatus => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId: number) =>
    async (dispatch: Dispatch<SetUserProfile>) => {
        try {
            const res = await ProfileAPI.getProfile(userId)
            dispatch(setUserProfile(res));
        } catch (err) {
            console.log(err.message);
        }
    }

export const getUserStatus = (userId: number) =>
    async (dispatch: Dispatch<SetUserStatus>) => {
        try {
            const res = await ProfileAPI.getStatus(userId);
            dispatch(setUserStatus(res));
        } catch (err) {
            console.log(err.message);
        }
    }

export const updateUserStatus = (status: string) =>
    async (dispatch: Dispatch<SetUserStatus>) => {
        try {
            const res = await ProfileAPI.updateStatus(status)
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status))
        } catch (err) {
            console.log(err.message);
        }
    }

export default profileReducer;