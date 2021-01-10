const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, text: 'May the force be with you', likesCount: 11},
        {id: 1, text: 'Fallow the force', likesCount: 9}
    ],
    profile: null,
    postText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                    postsData: [...state.postsData, {id: state.postsData.length, text: state.postText, likesCount: 0}],
                    postText: ''
                }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.postText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (postText) => ({type: UPDATE_POST_TEXT, postText: postText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;