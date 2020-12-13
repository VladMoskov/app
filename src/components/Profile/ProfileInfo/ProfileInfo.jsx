import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.PersonalInfoBlock}>

            <div>
                <img className={s.avatar} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
            </div>

            <div className={s.AboutUserBlock}>
                <h1>Vlad M.</h1>
                <h2>Date of birth: 24 april</h2>
                <h2>City: Kiev</h2>
                <h2>Education: NAU</h2>
                <h2>Web Site: ###</h2>
            </div>

        </div>

    );
}

export default ProfileInfo;