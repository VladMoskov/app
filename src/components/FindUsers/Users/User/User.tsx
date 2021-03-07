import React from 'react';
import userPhoto from './../../../../images/user.png'
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import FollowButton from "../../../common/FollowButton";
import {IUser} from "../../../../redux/Users-reduser";

export const User: React.FC<{ user: IUser }> = (props) => {

    return (
        <div>

            <div className={s.container}>
                <div className={s.leftSide}>
                    <NavLink to={`/profile/` + props.user.id}>
                        <img
                            className={s.avatarImage}
                            src={props.user.photos.small || userPhoto}
                            alt={''}
                        />
                    </NavLink>
                    <div className={s.follow}>

                        <FollowButton
                            id={props.user.id}
                            followed={props.user.followed}
                        />

                    </div>
                </div>
                <div className={s.rightSide}>
                    <h1 className={s.name}>{props.user.name}</h1>
                    <h1 className={s.status}>{props.user.status}</h1>
                </div>
            </div>

        </div>
    )
}

export default User;