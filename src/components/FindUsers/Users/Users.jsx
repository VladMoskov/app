import React from 'react';
import s from './Users.module.css';
import User from "./User/User";



const Users = (props) => {
    let users = props.users.map( user => <User id={user.id}
                                               name={user.name}
                                               status={user.status}
                                               followed={user.followed}
                                               location={user.location}
                                               follow={props.follow}
                                               unfollow={props.unfollow}
                                               imgUrl={user.imgUrl}/>);

    return (
        <div className={s.cintainer}>

            { users }

        </div>
    );
}

export default Users;