const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, text: 'May the force be with you', likesCount: 11},
        {id: 1, text: 'Fallow the force', likesCount: 9}
    ],

    postText: '',
}

const postsReducer = (state = initialState, action) => {

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
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updatePostTextActionCreator = (postText) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: postText,
    }
}

export default postsReducer;