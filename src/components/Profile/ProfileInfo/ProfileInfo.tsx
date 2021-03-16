import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStatus} from "./ProfileStatus";
import {IProfile} from '../../../redux/Profile-reducer';
import {Preloader} from "../../common/Preloader";
import {Contact} from "./Contacts/Contact";
import {FullName} from "./FullName/FullName";
import {AboutMe} from './AboutMe/AboutMe';
import {LoockingForAJob} from './LoockingForAJob/LoockingForAJob';
import { Avatar } from './Avatar/Avatar';

interface IProps {
    profilePage: {
        profile: IProfile | null
        postsData: {
            id: number
            text: string
            likesCount: number
        }[]
        userStatus: string
    }
    setUserStatus: (status: string) => void
    updateUserStatus: (status: string) => void
}

type TContactsArray = {
    [key: string]: string | null
}

export const ProfileInfo: React.FC<IProps> = (props) => {

    if (!props.profilePage.profile)
        return <Preloader/>

    const {profile} = props.profilePage;
    const contacts: TContactsArray = {...profile.contacts};

    return (
        <div className={s.PersonalInfoBlock}>

            <div>
                <Avatar photo={profile.photos?.large}/>

                <div>
                    <ProfileStatus
                        setUserStatus={props.setUserStatus}
                        updateUserStatus={props.updateUserStatus}
                        userStatus={props.profilePage.userStatus}
                    />
                </div>

            </div>

            <div className={s.AboutUserBlock}>

                <FullName
                    fullName={profile.fullName}
                />

                <AboutMe
                    aboutMe={profile.aboutMe}
                />

                <LoockingForAJob
                    lookingForAJob={profile.lookingForAJob}
                    lookingForAJobDescription={profile.lookingForAJobDescription}
                />

                <div>
                    <h1>Contacts</h1>
                    {Object.keys(contacts).map((contactKey) => {
                        return <Contact
                            key={contactKey}
                            contactKey={contactKey}
                            contact={contacts[contactKey]}
                        />
                    })}
                </div>
            </div>

        </div>
    );
}









