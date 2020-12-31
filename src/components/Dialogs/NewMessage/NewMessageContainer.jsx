import React from 'react';
import NewMessage from "./NewMessage";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/Dialogs-reduсer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChanged: (text) => {
            dispatch(updateMessageActionCreator(text));
            debugger;
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);


export default NewMessageContainer;
