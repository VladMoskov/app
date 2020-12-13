import React from 'react';
import SinglePost from "../SinglePost/SinglePost";
import  s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.wrapper}>
            <h2>News</h2>
            <SinglePost messege="May the force be with you"/>
            <SinglePost messege='Fallow the force'/>
        </div>

    );
}

export default Posts;