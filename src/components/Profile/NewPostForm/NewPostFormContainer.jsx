import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/Posts-reducer.jsx";
import NewPostForm from './NewPostForm';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postText: state.postsPage.postText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newPostText: (postText) => {
            dispatch(updatePostTextActionCreator(postText));
        },
        addNewPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

const NewPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostForm);

export default NewPostFormContainer;