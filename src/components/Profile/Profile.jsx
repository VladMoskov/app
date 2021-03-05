import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import Preloader from "../common/Preloader";
import {NewPostForm} from "./NewPostForm/NewPostForm";
import {Posts} from "./Posts/Posts";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>

                <ProfileInfo {...props} />


                <NewPostForm addNewPost={props.addNewPost}/>

                <Posts/>

            </div>
        );
    }
}

export default Profile;