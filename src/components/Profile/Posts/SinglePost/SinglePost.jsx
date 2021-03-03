import React from "react";
import s from './SinglePost.module.css';

const SinglePost = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt={""}/>
            <div className={s.text}>
                <h1>
                    {props.text}
                </h1>
                <div className={s.likes}>
                    Likes: {props.likesCount}
                </div>
            </div>

        </div>
    );
}

export default SinglePost;