import React from 'react';
import {connect} from "react-redux";
import {followAC, setUserAC} from "../../../redux/Users-reduser";
import Users from "./Users";

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;