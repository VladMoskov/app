import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const ContactItem = (props) => {
    return (
        <NavLink activeClassName={s.activeC} className={s.dialog} to={props.path}>
            <h2>{props.name}</h2>
        </NavLink>
    )
}

export default ContactItem;