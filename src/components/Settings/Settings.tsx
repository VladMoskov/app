import React, {useEffect, useState} from 'react';
import {useSelector} from "../common/hooks";
import {getUserProfile, IProfile, updateProfile} from "../../redux/Profile-reducer";
import {useDispatch} from "react-redux";
import {Preloader} from "../common/Preloader";
import s from './Settings.module.css';
import {SettingsItem} from "./SettingsItem/SettingsItem";
import loading from './../../images/loader.svg';

export const Settings: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const profile = useSelector(state => state.userAuth.authProfile)
    const authUserId = useSelector(state => state.userAuth.id)

    useEffect(() => {
        if (authUserId)
            dispatch(getUserProfile(Number(authUserId)));
    }, [dispatch, authUserId])

    if (!profile) return <Preloader/>

    let newProfile: IProfile = {...profile, contacts: {...profile.contacts}};

    const setField = (name: string, inputValue: string | null, isContact: boolean): IProfile => {
        if (!isContact) {
            newProfile = {...newProfile, [name]: inputValue, lookingForAJob: true};
            return newProfile
        } else {
            newProfile = {...newProfile, contacts: {...newProfile?.contacts, [name]: inputValue}};
            return newProfile
        }
    }

    const contactsItems = Object.entries(profile.contacts).map(prop => {
        return <SettingsItem
            key={prop[0]}
            name={prop[0]}
            itemValue={prop[1]}
            setField={setField}
            isContact={true}
        />
    })

    const mainItems = Object.entries(profile).map(prop => {
        if (prop[0] !== "contacts" && prop[0] !== "photos" && prop[0] !== "userId") {
            return <SettingsItem
                key={prop[0]}
                name={prop[0]}
                itemValue={prop[1]}
                setField={setField}
                isContact={false}
            />
        } else {
            return null
        }
    })


    return <div>

        <h1 className={s.title}>Main Information</h1>
        <div className={s.wrapper}>{mainItems}</div>

        <h1 className={s.title}>Contacts</h1>
        <div className={s.wrapper}>{contactsItems}</div>

        <button
            className={s.submitButton}
            onClick={() => {
                setIsLoading(true)
                dispatch(updateProfile(newProfile, Number(authUserId)))
                setIsLoading(false)
            }}
        >Save {isLoading && <img alt={''} src={loading} className={s.loading}/>}
        </button>

    </div>
}