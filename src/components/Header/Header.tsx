import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header: React.FC<PropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg"  alt={""}/>
            </div>
            <h1>
                { isAuth ? login : <NavLink to='/login'>Login In</NavLink> }
            </h1>
        </header>
    );
}

export default Header;