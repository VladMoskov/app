import React from 'react';
import userPhoto from './../../../../images/user.png'
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import FollowButton from "../../../common/FollowButton";

class User extends React.Component {

    render() {
        return (
            <div>

                <div className={s.container}>
                    <div className={s.leftSide}>
                        <NavLink to={`/profile/` + this.props.id}>
                            <img className={s.avatarImage}
                                 src={this.props.imgUrl !== null ? this.props.imgUrl : userPhoto}/>
                        </NavLink>
                        <div className={s.follow}>

                            <FollowButton id={this.props.id}
                                          follow={this.props.follow}
                                          followed={this.props.followed}
                                          followingInProgress={this.props.followingInProgress}/>

                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <h1 className={s.name}>{this.props.name}</h1>
                        <h1 className={s.status}>{this.props.status}</h1>
                    </div>
                </div>

            </div>
        );
    }
}

export default User;