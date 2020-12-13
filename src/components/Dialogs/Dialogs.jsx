import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import ContactItem from "./ContactItem/ContactItem";

const Dialogs = (props) => {

    let ContactItems = props.contactItemData
        .map(contact => <ContactItem path={'/dialogs/' + contact.id} name={contact.name}/>);

    let MessagesItems = props.messageItemData
        .map(message => <Message message={message.message}/>);


    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <div className={s.dialogsTitle}><h1>Dialogs</h1></div>
                <div className={s.messagesTitle}><h1>Messages</h1></div>
            </div>

            <div className={s.dialogs}>

                {ContactItems}

            </div>

            <div className={s.messages}>

                {MessagesItems}

            </div>

        </div>
    )
}

export default Dialogs;