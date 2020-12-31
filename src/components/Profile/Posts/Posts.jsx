import React from 'react';
import SinglePost from "./SinglePost/SinglePost";
import  s from './Posts.module.css';

const Posts = (props) => {


    let posts = props.postsData
        .map( post => <SinglePost text={post.text}
                                  likesCount={post.likesCount}
                                  addPost={props.addPost}
                                  key={post.id}/>);

    return (
        <div className={s.wrapper}>
            <h2>News</h2>
            { posts }
        </div>

    );
}

export default Posts;