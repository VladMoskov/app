import {act} from "@testing-library/react";

const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS-FETCHING-TOGGLE';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed: !user.followed}
                    return user
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case IS_FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW_TOGGLE, userId});

export const setUser = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const setIsFetching = () => ({type: IS_FETCHING_TOGGLE});

export default usersReducer;