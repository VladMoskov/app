import React from 'react';
import SinglePost from "./SinglePost/SinglePost";
import s from './Posts.module.css';
import {useSelector} from "../../common/hooks";

export const Posts: React.FC = () => {

    const posts = useSelector(state => state.profilePage.postsData);

    return (
        <div className={s.wrapper}>
            <h2>News</h2>
            {posts.map(post =>
                <SinglePost
                    text={post.text}
                    likesCount={post.likesCount}
                    key={post.id}
                />
            )}
        </div>

    );
}