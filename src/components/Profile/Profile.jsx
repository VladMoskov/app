import React from 'react';
import ProfileTopicPhoto from "./ProfileTopicPhoro/ProfileTopicPhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostForm from "./NewPostForm/NewPostForm";
import Posts from "./Posts/Posts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>

            <ProfileTopicPhoto/>

            <ProfileInfo/>

            <NewPostForm/>

            <Posts/>


        </div>
    );
}

export default Profile;