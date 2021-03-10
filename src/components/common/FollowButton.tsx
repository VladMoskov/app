import React, {useEffect, useRef} from 'react';
import s from "../FindUsers/Users/User/User.module.css";
import {useDispatch} from "react-redux";
import {follow, followInProgress, unfollow} from "../../redux/Users-reduser";

type TProps = {
    id: number
    followed: boolean
    followInProgress: boolean
}

export const FollowButton: React.FC<TProps> = (props) => {
    
    const ifFirstRender = useRef(true)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!ifFirstRender.current) {
            if (props.followed) {
                dispatch(unfollow(props.id.toString()))
                dispatch(followInProgress())
                ifFirstRender.current = true;
            } else {
                dispatch(follow(props.id.toString()))
                dispatch(followInProgress())
                ifFirstRender.current = true;
            }
        }
    }, [props.id, dispatch, props.followed])

    if (!props.followInProgress)
        return (
            <button
                className={s.fallowButton}
                onClick={() => {
                    dispatch(followInProgress())
                    ifFirstRender.current = false;
                }}
            > {props.followed ? '1': '2'}</button>
        )
    else
        return <button className={s.fallowButton}/>
}