import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import ContactItem from "./ContactItem/ContactItem";

const Dialogs = (props) => {

    let contactItemData = [
        {id: 1, name: 'Nic'},
        {id: 2, name: 'Jon'},
        {id: 3, name: 'Alibaba'},
        {id: 4, name: 'Artur'},
        {id: 5, name: 'Josef'}
    ]

    let messageItemData = [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'message 2'},
        {id: 3, message: 'message 3'},
        {id: 4, message: 'message 4'},
        {id: 5, message: 'message 5'}
    ]

    let ContactItems = contactItemData
        .map(contact => <ContactItem path={'/dialogs/' + contact.id} name={contact.name}/>);

    let MessagesItems = messageItemData
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