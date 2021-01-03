import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";


const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsers(res.data.items);
            })
    }

    let users = props.users.map( user => <User id={user.id}
                                               name={user.name}
                                               status={user.status}
                                               followed={user.followed}
                                               follow={props.follow}
                                               imgUrl={user.photos.small}/>);

    return (
        <div className={s.cintainer}>

            { users }

        </div>
    );
}

export default Users;