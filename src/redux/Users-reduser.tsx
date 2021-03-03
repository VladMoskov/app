import {UsersAPI} from "../API/API";

const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS-FETCHING-TOGGLE';
const FOLLOWING_IN_PROGRESS ='FOLLOWING_IN_PROGRESS';


export type initialStateType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

type usersType = {
    name: string
    id: number
    photos: {
        small: string |null
        large: string |null
    }
    status: string | null
    followed: boolean
}

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {

        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map((user: any) => {
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

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: !state.followingInProgress
            }

        default:
            return state;
    }
}

export type followType = {
    type: typeof FOLLOW_TOGGLE
    userId: number
}

export type setUserType = {
    type: typeof SET_USERS
    users: Array<usersType>
}

export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export type setTotalUserCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export type setIsFetchingType = {
    type: typeof IS_FETCHING_TOGGLE
}

export type followingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS
}

export const follow = (userId: number):followType => ({type: FOLLOW_TOGGLE, userId});

export const setUser = (users: Array<usersType>):setUserType => ({type: SET_USERS, users});

export const setCurrentPage = (page: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, page});

export const setTotalUserCount = (totalCount: number): setTotalUserCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export const setIsFetching = (): setIsFetchingType => ({type: IS_FETCHING_TOGGLE});

export const followingInProgress = (): followingInProgressType => ({type: FOLLOWING_IN_PROGRESS});

export default usersReducer;


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setIsFetching());
        UsersAPI.getUsers(currentPage, pageSize)
            .then((res: any) => {
                dispatch(setIsFetching());
                dispatch(setUser(res.data.items));
                dispatch(setTotalUserCount(res.data.totalCount));
            })
    }
}