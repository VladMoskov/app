import React, {useEffect} from 'react';
import {getUsers} from "../../../redux/Users-reduser";
import {Users} from "./Users";
import {useSelector} from "../../common/hooks";
import {useDispatch} from "react-redux";

export const UsersContainer: React.FC = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector(state => state.usersPage)

    useEffect(() => {
        dispatch(getUsers(usersPage.currentPage, usersPage.pageSize));
    }, [usersPage.currentPage, usersPage.pageSize, dispatch])

    return (
        <div>
            <Users
                usersPage={usersPage}
            />
        </div>
    );
}