import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const ContactItem = (props) => {
    return (
        <NavLink activeClassName={s.activeC} className={s.dialog} to={props.path}>
            <h2>{props.id}</h2>
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            <h1>{props.message}</h1>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.dialogsTitle}><h1>Dialogs</h1></div>
                <div className={s.messagesTitle}><h1>Messages</h1></div>
            </div>
            <div className={s.dialogs}>
                <ContactItem path="/dialogs/nick" id="Nick"/>
                <ContactItem path="/dialogs/jon" id="Jon"/>
                <ContactItem path="/dialogs/alibaba" id="Alibaba"/>
                <ContactItem path="/dialogs/artur" id="Artur"/>
                <ContactItem path="/dialogs/josef" id="josef"/>
            </div>
            <div className={s.messages}>
                <Message message="message 1"/>
                <Message message="message 2"/>
                <Message message="message 3"/>
                <Message message="message 4"/>
            </div>
        </div>
    )
}

export default Dialogs;