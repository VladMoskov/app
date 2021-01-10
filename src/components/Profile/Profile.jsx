import React from 'react';
import ProfileTopicPhoto from "./ProfileTopicPhoro/ProfileTopicPhoto";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import NewPostFormContainer from "./NewPostForm/NewPostFormContainer";
import PostsCintainer from "./Posts/PostsCintainer";
import Preloader from "../common/Preloader";

const Profile = (props) => {
    if (!props.profile){
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>

                <ProfileTopicPhoto/>

                <ProfileInfo profile={props.profile}/>

                <NewPostFormContainer store={props.store}/>

                <PostsCintainer/>


            </div>
        );
    }
}

export default Profile;