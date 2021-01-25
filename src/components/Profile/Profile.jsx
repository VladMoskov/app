import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import PostsCintainer from "./Posts/PostsCintainer";
import Preloader from "../common/Preloader";
import NewPostForm from "./NewPostForm/NewPostForm";

const Profile = (props) => {
    if (!props.profile){
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>

                <ProfileInfo profile={props.profile}
                             follow={props.follow}
                             id={props.id}
                             updateUserStatus={props.updateUserStatus}
                             setUserStatus={props.setUserStatus}
                             userStatus={props.userStatus}/>

                <NewPostForm addNewPost={props.addNewPost}/>

                <PostsCintainer/>

            </div>
        );
    }
}

export default Profile;