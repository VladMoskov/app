import {UsersAPI} from "../API/API";
import {Dispatch, Reducer} from "redux";

const FOLLOW_TOGGLE = 'Users-reducer/FOLLOW-TOGGLE';
const SET_USERS = 'Users-reducer/SET-USERS';
const SET_CURRENT_PAGE = 'Users-reducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'Users-reducer/SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'Users-reducer/IS-FETCHING-TOGGLE';
const FOLLOW_IN_PROGRESS = 'Users-reducer/FOLLOW_IN_PROGRESS'


export type TInitialState = {
    users: Array<IUser>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followInProgress: boolean
}

export interface IUser {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
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
    followInProgress: false
}

const usersReducer: Reducer<TInitialState, TActions> = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map((user: IUser) => {
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

        case FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: !state.followInProgress
            }

        default:
            return state;
    }
}


type  TActions =
    TFollow | TSetUser | TSetCurrentPage | TSetTotalUserCount | TSetIsFetching | TSetFollowInProgress

export type TFollow = {
    type: typeof FOLLOW_TOGGLE
    userId: number
}

export type TSetUser = {
    type: typeof SET_USERS
    users: Array<IUser>
}

export type TSetCurrentPage = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export type TSetTotalUserCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export type TSetIsFetching = {
    type: typeof IS_FETCHING_TOGGLE
}

export type TSetFollowInProgress = {
    type: typeof FOLLOW_IN_PROGRESS
}

export const followToggle = (userId: number): TFollow => ({type: FOLLOW_TOGGLE, userId});

export const setFollowInProgress = (): TSetFollowInProgress => ({type: FOLLOW_IN_PROGRESS});

export const setUser = (users: Array<IUser>): TSetUser => ({type: SET_USERS, users});

export const setCurrentPage = (page: number): TSetCurrentPage => ({type: SET_CURRENT_PAGE, page});

export const setTotalUserCount = (totalCount: number): TSetTotalUserCount => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});

export const setIsFetching = (): TSetIsFetching => ({type: IS_FETCHING_TOGGLE});

export default usersReducer;

type TGetUsersResponse = {
    data: {
        items: Array<IUser>
        totalCount: number
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<TSetIsFetching | TSetUser | TSetTotalUserCount>) => {
        dispatch(setIsFetching());
        try {
            const res = await (UsersAPI.getUsers(currentPage, pageSize) as Promise<TGetUsersResponse>)
            dispatch(setIsFetching());
            dispatch(setUser(res.data.items));
            dispatch(setTotalUserCount(res.data.totalCount));
        } catch (err) {
            console.log(err.message)
        }
    }
}

type TFollowResponse = {
    resultCode: number
    messages: Array<string>,
    data: object
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<TFollow | TSetFollowInProgress>) => {
        dispatch(setFollowInProgress());
        try {
            await (UsersAPI.follow(userId) as Promise<TFollowResponse>)
            dispatch(followToggle(userId));
            dispatch(setFollowInProgress());
            console.log('followed')
        } catch (err) {
            console.log(err.message);

        }
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<TFollow | TSetFollowInProgress>) => {
        dispatch(setFollowInProgress());
        try {
            await (UsersAPI.unfollow(userId) as Promise<TFollowResponse>)
            dispatch(followToggle(userId))
            dispatch(setFollowInProgress());
            console.log('unfollowed')
        } catch (err) {
            console.log(err.message)
        }
    }
}

