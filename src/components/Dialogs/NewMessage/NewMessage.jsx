import React from 'react';
import s from './NewMessage.module.css';

let NewMessage = (props) => {

    let newMessageArea = React.createRef();

    let updateTextarea = () => {
        let text = newMessageArea.current.value;
        props.onChanged(text);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <textarea onChange={updateTextarea}
                          className={s.textarea}
                          value={props.newMessageText}
                          ref={newMessageArea}/>
                <button onClick={props.addNewMessage} className={s.button}>SEND</button>
            </div>
        </div>
    )
}

export default NewMessage;
