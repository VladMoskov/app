import React from 'react';
import s from "../FindUsers/Users/User/User.module.css";
import * as axios from "axios";

class FollowButton extends React.Component {

    follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.id, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "c3bce8fd-51f4-4013-a5ad-075fa9155b21"
            }
        }).then(res => {
            debugger
            if (res.data.resultCode === 0)
                this.props.follow(this.props.id)
        })
    }

    unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.id, {
            withCredentials: true,
            headers: {
                "API-KEY": "c3bce8fd-51f4-4013-a5ad-075fa9155b21"
            }
        })
            .then(res => {
                if (res.data.resultCode === 0)
                    debugger
                    this.props.follow(this.props.id)
            })
    }

    render() {
        return (
            this.props.followed
                ? <button className={s.fallowButton} onClick={() => {
                    this.unfollow()
                }}> Unfallow </button>
                : <button className={s.fallowButton} onClick={() => {
                    this.follow()
                }}> Fallow </button>
        )
    }
}

export default FollowButton;