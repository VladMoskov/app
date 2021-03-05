import React from 'react';
import s from './ProfileInfo.module.css';
import profileImage from '../../../images/profileImage.png';
import {ProfileStatus} from "./ProfileStatus";
import {IProfile} from '../../../redux/Profile-reducer';

interface TProps {
    profile: IProfile
    id: number
    setUserStatus: () => void
    updateUserStatus: (status: string) => void
    userStatus: string
    addNewPost: (post: string) => void
}

export const ProfileInfo: React.FC<TProps> = (props) => {

    let contacts = props.profile.contacts;

    return (
        <div className={s.PersonalInfoBlock}>

            <div>
                <img
                    className={s.avatar}
                    src={props.profile.photos.large ? props.profile.photos.large : profileImage}
                    alt={""}
                />

                <div>
                    <ProfileStatus
                        setUserStatus={props.setUserStatus}
                        updateUserStatus={props.updateUserStatus}
                        userStatus={props.userStatus}
                    />
                </div>

            </div>


            <div className={s.AboutUserBlock}>
                <h1>{props.profile.fullName}</h1>
                <h2><b>Looking for job: </b>{
                    props.profile.lookingForAJob
                        ? props.profile.lookingForAJobDescription
                        : 'working'}
                </h2>
                <div>
                    <h1>Contacts</h1>
                    <h2><i>github: </i>{contacts.github ? contacts.github : '-'}</h2>
                    <h2><i>vk: </i>{contacts.vk ? contacts.vk : '-'}</h2>
                    <h2><i>facebook: </i>{contacts.facebook ? contacts.facebook : '-'}</h2>
                    <h2><i>instagram: </i>{contacts.instagram ? contacts.instagram : '-'}</h2>
                    <h2><i>twitter: </i>{contacts.twitter ? contacts.twitter : '-'}</h2>
                    <h2><i>website: </i>{contacts.website ? contacts.website : '-'}</h2>
                    <h2><i>youtube: </i>{contacts.youtube ? contacts.youtube : '-'}</h2>
                    <h2><i>mainLink: </i>{contacts.mainLink ? contacts.mainLink : '-'}</h2>
                </div>
            </div>

        </div>

    );
}