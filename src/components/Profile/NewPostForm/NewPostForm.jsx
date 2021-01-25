import React from 'react';
import s from './NewPostForm.module.css';
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {

    let addNewPost = (value) => {
        props.addNewPost(value);
    }

    return (
        <div className={s.postForm}>
            <h1>My new post</h1>
            <NewPostFormContainer onSubmit={addNewPost}/>
            <hr className={s.hr}/>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'text'} component={'textarea'} placeholder={'New Post'} className={s.textarea}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const NewPostFormContainer = reduxForm({
    form: 'newPost'
})(PostForm)

export default NewPostForm;