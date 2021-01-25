import {ProfileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    postsData: [
        {id: 1, text: 'May the force be with you', likesCount: 11},
        {id: 1, text: 'Fallow the force', likesCount: 9}
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            debugger
            return {
                ...state,
                    postsData: [...state.postsData, {id: state.postsData.length, text: action.text.text, likesCount: 0}]
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

export const addNewPost = (text) => ({type: ADD_POST, text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data));
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(res => {
        dispatch(setUserStatus(res.data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(res => {
        dispatch(setUserStatus(status));
    })
}

export default profileReducer;