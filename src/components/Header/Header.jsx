import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" />
            </div>
        </header>
    );
}

export default Header;