import React from 'react';
import s from './FindUsers.module.css';
import UsersContainer from "./Users/UsersContainer";

const FindUsers = (props) => {

    return (
        <div>
            <UsersContainer store={props.store} />
        </div>
    );
}

export default FindUsers;