import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        contactItemData: state.dialogsPage.contactItemData,
        messageItemData: state.dialogsPage.messageItemData,
        isAuth: state.userAuth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);


export default DialogsContainer;