import React from 'react';
import s from "../FindUsers/Users/User/User.module.css";
import {UsersAPI} from "../../API/API";
import {followingInProgress} from "../../redux/Users-reduser";

class FollowButton extends React.Component {

    follow = () => {
        followingInProgress();
        UsersAPI.follow(this.props.id).then(res => {
            if (res)
                this.props.follow(this.props.id);
            followingInProgress();
        })
    }

    unfollow = () => {
        UsersAPI.unfollow(this.props.id).then(res => {
            if (res)
                this.props.follow(this.props.id)
            followingInProgress();
        })
    }

    render() {
        if(!this.props.followingInProgress)
            return (
                this.props.followed
                    ? <button className={s.fallowButton} onClick={() => {
                        this.unfollow()
                    }}> Unfallow </button>
                    : <button className={s.fallowButton} onClick={() => {
                        this.follow()
                    }}> Fallow </button>
            )
        else
            return <button className={s.fallowButton}/>
    }
}

export default FollowButton;