import React from 'react';
import s from './User.module.css';

const User = (props) => {

    let buttonValue = props.followed ? 'Fallow': 'Unfallow';

    return (
        <div>

            <div className={s.container}>
                <div className={s.leftSide}>
                    <img className={s.avatarImage} src={props.imgUrl} alt={}/>
                    <div className={s.follow}>
                        <button onClick={()=> { props.follow(props.id) }} className={s.fallowButton}>{buttonValue}</button>
                    </div>
                </div>
                <div className={s.rightSide}>
                    <h1 className={s.name}>{props.name}</h1>
                    <h1 className={s.status}>{props.status}</h1>
                    <h1 className={s.country}>{props.location.country}</h1>
                    <h1 className={s.city}>{props.location.city}</h1>
                </div>
            </div>

        </div>
    );
}

export default User;