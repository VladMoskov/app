import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/music">Music</NavLink>
            </div>

            <hr/>

            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/find-users">Find Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink activeClassName={s.activeC} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;