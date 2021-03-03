
import NewMessage from "./NewMessage";
import {addMessage} from "../../../redux/Dialogs-reduсer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const NewMessageContainer = connect(mapStateToProps, {addMessage})(NewMessage);


export default NewMessageContainer;
