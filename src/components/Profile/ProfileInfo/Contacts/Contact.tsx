import React from 'react';
import s from './Contact.module.css';

type TProps = {
    contactKey: string | null
    contact: string | null
}

export const Contact: React.FC<TProps> = (props) => {
        return (
            <div className={s.PersonalInfoBlock}>
                <h2><i>{props.contactKey}: </i>
                    <a href={`https://` + props.contact || '#'}>{props.contact || '-'}</a>
                </h2>
            </div>
        )
    }