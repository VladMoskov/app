import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" />

            </div>
            <h1>
                { props.isAuth ? props.login : 'false'}
            </h1>
        </header>
    );
}

export default Header;