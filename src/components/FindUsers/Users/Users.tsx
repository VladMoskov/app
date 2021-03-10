import React from 'react';
import s from './Users.module.css';
import {Preloader} from "../../common/Preloader";
import User from "./User/User";
import {setCurrentPage, TInitialState } from '../../../redux/Users-reduser';
import {useDispatch} from "react-redux";

type TProps = {
    usersPage: TInitialState
}

export const Users: React.FC<TProps> = (props) => {

    const dispatch = useDispatch();

    let count = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize);
    let pages = [];

    for (let i = 1; i <= count; i++) {
        if (i > 10) {
            break;
        }
        pages.push(i);
    }
    return (
        <div className={s.cintainer}>
            <div>
                {pages.map(page => {
                    return <span
                        key={page}
                        onClick={() => dispatch(setCurrentPage(page))}
                        className={props.usersPage.currentPage === page
                            ? s.currentPage
                            : s.pages
                        }>{page}</span>
                })}
            </div>
                { props.usersPage.isFetching ? <Preloader /> : null }
            <div className={s.cintainer}>
                {props.usersPage.users
                        .map(user =>
                            <User
                                key={user.id}
                                user={user}
                                followInProgress={props.usersPage.followInProgress}
                            />
                        )}
            </div>


        </div>
    );
}