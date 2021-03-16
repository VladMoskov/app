import React from "react";
import s from './SinglePost.module.css';
import {useSelector} from "../../../common/hooks";

const SinglePost: React.FC<{text: string, likesCount: number}> = (props) => {

    const avatar = useSelector(state => state.userAuth.authProfile?.photos?.small)

    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src={avatar || ''} alt={""}/>
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