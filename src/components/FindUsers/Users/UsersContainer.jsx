import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUserCount,
    setUser
} from "../../../redux/Users-reduser";
import * as axios from "axios";
import User from "./User/User";
import Users from "./Users";

const UsersAPI = (props) => {

    if (props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(res => {
                props.setIsFetching();
                props.setUser(res.data.items);
                props.setTotalUserCount(res.data.totalCount);
            })
    }

    let setCurrentPage = (page) => {
        props.setIsFetching();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
            .then(res => {
                props.setUser(res.data.items);
                props.setIsFetching();
            })
        props.setCurrentPage(page);
    }


    let users = props.users
        .map(user => <User id={user.id}
                           name={user.name}
                           status={user.status}
                           followed={user.followed}
                           follow={props.follow}
                           imgUrl={user.photos.small}
        />);

    return (
        <>

            <Users users={users}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   setCurrentPage={setCurrentPage}
                   currentPage={props.currentPage}
                   isFetching={props.isFetching}/>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


const UsersContainer = connect(mapStateToProps, {follow, setUser, setCurrentPage, setTotalUserCount, setIsFetching})(UsersAPI);

export default UsersContainer;