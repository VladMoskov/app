import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../images/logo.svg'

type PropsType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<PropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}  alt={""}/>
            </div>
            <h1>
                { isAuth ? login : <NavLink to='/login'>Login In</NavLink> }
            </h1>
        </header>
    )
}