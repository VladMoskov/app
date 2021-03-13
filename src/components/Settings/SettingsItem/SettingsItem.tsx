import React, {useState} from 'react';
import s from './SettingsItem.module.css';
import edit from './../../../images/edit.svg'
import {IProfile} from "../../../redux/Profile-reducer";

type TProps = {
    name: string
    itemValue: string | null
    setField: (name: string, inputValue: string | null, isContact: boolean) => IProfile
    isContact: boolean
}

export const SettingsItem: React.FC<TProps> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(props.itemValue || '');

    return <div className={s.item}>
        <div className={s.name}><h1>{props.name}</h1></div>
        {!editMode
            ? <div className={s.value}>
                <h1>{inputValue || <i>no info</i>}</h1>
                <img
                    src={edit} alt={''}
                    onClick={() => setEditMode(true)}
                />
            </div>
            : <input
                className={s.input}
                autoFocus={true}
                onBlur={() => {
                    setEditMode(false);
                    props.setField(props.name, inputValue, props.isContact)
                }}
                onChange={(e) => setInputValue(e.target.value || '')}
                value={inputValue || ''}
            />}
    </div>
}