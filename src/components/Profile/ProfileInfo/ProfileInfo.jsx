import React from 'react';
import s from './ProfileInfo.module.css';
import profileImage from '../../../images/profileImage.png';
import FollowButton from "../../common/FollowButton";

const ProfileInfo = (props) => {
    return (
        <div className={s.PersonalInfoBlock}>

            <div>
                <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : profileImage}/>
                <FollowButton id={props.id} follow={props.follow} followed={props.followed}/>
            </div>

            <div className={s.AboutUserBlock}>
                <h1>{ props.profile.fullName }</h1>
                <h2><b>About me: </b>{props.profile.aboutMe ? props.profile.aboutMe: 'it`s nothing to say'}</h2>
                <h2><b>Looking for job: </b>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription: 'working'}</h2>
                <h1>Contacts</h1>
                <h2><i>github: </i>{props.profile.contacts.github ? props.profile.contacts.github: '-'}</h2>
                <h2><i>vk: </i>{props.profile.contacts.vk ? props.profile.contacts.vk: '-'}</h2>
                <h2><i>facebook: </i>{props.profile.contacts.facebook ? props.profile.contacts.facebook: '-'}</h2>
                <h2><i>instagram: </i>{props.profile.contacts.instagram ? props.profile.contacts.instagram: '-'}</h2>
                <h2><i>twitter: </i>{props.profile.contacts.twitter ? props.profile.contacts.twitter: '-'}</h2>
                <h2><i>website: </i>{props.profile.contacts.website ? props.profile.contacts.website: '-'}</h2>
                <h2><i>youtube: </i>{props.profile.contacts.youtube ? props.profile.contacts.youtube: '-'}</h2>
                <h2><i>mainLink: </i>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink: '-'}</h2>
            </div>

        </div>

    );
}

export default ProfileInfo;