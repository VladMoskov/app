import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {Preloader} from "../common/Preloader";
import {NewPostForm} from "./NewPostForm/NewPostForm";
import {Posts} from "./Posts/Posts";
import {IInitialState, setUserStatus, updateUserStatus} from "../../redux/Profile-reducer";

interface IProps {
    profilePage: IInitialState
    addNewPost: (inputText: string) => void
    setUserStatus: (status: string) => void
    updateUserStatus: (status: string) => void
}

const Profile: React.FC<IProps> = (props) => {
    if (!props.profilePage.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>

                <ProfileInfo profilePage={props.profilePage}
                             setUserStatus={setUserStatus}
                             updateUserStatus={updateUserStatus} />


                <NewPostForm addNewPost={props.addNewPost}/>

                <Posts/>

            </div>
        );
    }
}

export default Profile;