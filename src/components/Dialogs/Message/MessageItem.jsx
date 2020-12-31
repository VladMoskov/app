import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    if (props.sender){
        return (
                <div className={s.messageWrapper}>
                    <div className={s.message}>
                        <h1>{props.message}</h1>
                    </div>
                </div>
        )
    } else {
        return (
            <div className={s.messageWrapper + ' ' + s.right}>
                <div className={s.message}>
                    <h1>{props.message}</h1>
                </div>

            </div>
        )
    }
}

export default MessageItem;