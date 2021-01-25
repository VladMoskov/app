import React from 'react';
import s from './Dialogs.module.css';
import MessageItem from "./Message/MessageItem";
import ContactItem from "./ContactItem/ContactItem";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let ContactItems = props.contactItemData
        .map(contact => <ContactItem path={'/dialogs/' + contact.id}
                                     name={contact.name}
                                     key={contact.id}/>);

    let MessagesItems = props.messageItemData
        .map(message => <MessageItem message={message.message}
                                     sender={message.imSender}
                                     key={message.id}/>);

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <div className={s.dialogsTitle}><h1>Dialogs</h1></div>
                <div className={s.messagesTitle}><h1>Messages</h1></div>
            </div>

            <div className={s.dialogs}>

                {ContactItems}

            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>

                    { MessagesItems }

                </div>

                <NewMessageContainer/>
            </div>

        </div>
    )
}

export default Dialogs;