import React from 'react';
import s from "../FindUsers/Users/User/User.module.css";
import {useDispatch} from "react-redux";
import {follow, unfollow} from '../../redux/Users-reduser';

type TProps = {
    id: number
    followed: boolean
    followInProgress: boolean
}

export const FollowButton: React.FC<TProps> = (props) => {

    const dispatch = useDispatch();

    if (!props.followInProgress)
        return (
            <button
                className={s.fallowButton}
                onClick={() => {
                    props.followed
                        ?dispatch(unfollow(props.id))
                        :dispatch(follow(props.id))
                    }
                }
            > {props.followed ? 'unfollow' : 'follow'}</button>
        )
    else
        return <button className={s.fallowButton}>processing</button>
}