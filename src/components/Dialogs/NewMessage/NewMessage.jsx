import React from 'react';
import s from './NewMessage.module.css';
import {Field, reduxForm} from "redux-form";

const NewMessage = (props) => {

    let addMessage = (value) => {
        props.addMessage(value);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <NewMessageFormContainer onSubmit={addMessage}/>
            </div>
        </div>
    )
}


const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} component={'textarea'}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const NewMessageFormContainer = reduxForm({
    form: 'newMessage'
})(NewMessageForm)

export default NewMessage;
