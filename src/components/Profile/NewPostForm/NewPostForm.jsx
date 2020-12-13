import React from 'react';
import s from './NewPostForma.module.css';

const NewPostForm = () => {
    return (
        <div className={s.postForm}>
            <h1>My new post</h1>
            <textarea className={s.textArea}></textarea>
            <button className={s.button}>Sumbit</button>
            <hr className={s.hr}/>
        </div>

    );
}

export default NewPostForm;