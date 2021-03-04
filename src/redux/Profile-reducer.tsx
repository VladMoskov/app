import {ProfileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

type postDataType = {
    id: number
    text: string
    likesCount: number
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type photosType = {
    small: string
    large: string
}
type ProfileType = {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}

export type InitialStateType = {
    postsData: Array<postDataType>
    profile: ProfileType | null
    userStatus: string
}

let initialState = {
    postsData: [
        {id: 1, text: 'May the force be with you', likesCount: 11},
        {id: 2, text: 'Fallow the force', likesCount: 9}
    ],
    profile: null,
    userStatus: ''
}

const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData, {
                        id: state.postsData.length,
                        text: action.text.text,
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

export const addNewPost = (text: string) => ({type: ADD_POST, text});
export const setUserProfile = (profile: object) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId: number) => (dispatch: any) => {
    ProfileAPI.getProfile(userId).then((res: any) => {
        dispatch(setUserProfile(res.data));
    })
}

export const getUserStatus = (userId: number) => (dispatch: any) => {
    ProfileAPI.getStatus(userId).then((res: any) => {
        dispatch(setUserStatus(res.data));
    })
}

export const updateUserStatus = (status: string) => (dispatch: any) => {
    ProfileAPI.updateStatus(status).then(
        dispatch(setUserStatus(status))
    )
}

export default profileReducer;