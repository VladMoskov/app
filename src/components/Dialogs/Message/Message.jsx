import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <h1>{props.message}</h1>
        </div>
    )
}

export default Message;