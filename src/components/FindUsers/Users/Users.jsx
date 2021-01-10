import React from 'react';
import s from './Users.module.css';
import Preloader from "../../common/Preloader";


const Users = (props) => {

    let count = Math.ceil(props.totalUsersCount / props.pageSize);

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
                    return <span onClick={() => props.setCurrentPage(page)}
                                 className={props.currentPage === page ? s.currentPage : s.pages}>{page}</span>
                })}
            </div>
                { props.isFetching ? <Preloader /> : null }
            <div className={s.cintainer}>
                {props.users}
            </div>


        </div>
    );
}

export default Users;