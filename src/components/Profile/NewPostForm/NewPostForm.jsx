import React from 'react';
import s from './NewPostForm.module.css';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/Posts-reducer.jsx";


const NewPostForm = (props) => {

    let newPostElement = React.createRef();


    let addNewPost = () => {
        props.addNewPost();
    }

    let newPostText = () => {
        let text = newPostElement.current.value;
        props.newPostText(text);
    }

    return (
        <div className={s.postForm}>
            <h1>My new post</h1>

            <textarea onChange={newPostText}
                      ref={newPostElement}
                      value={props.postText}
                      className={s.textArea} />

            <button onClick={ addNewPost } className={s.button}>Submit</button>

            <hr className={s.hr}/>
        </div>

    );
}

export default NewPostForm;