import React from 'react';
import ProfileTopicPhoto from "./ProfileTopicPhoro/ProfileTopicPhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";
import PostsCintainer from "./Posts/PostsCintainer";

const Profile = (props) => {
;
    return (
        <div className={s.content}>

            <ProfileTopicPhoto/>

            <ProfileInfo/>

            <NewPostFormContainer store={props.store}/>

            <PostsCintainer/>


        </div>
    );
}

export default Profile;