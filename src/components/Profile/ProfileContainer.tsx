import React, {useEffect} from 'react';
import Profile from "./Profile";
import {
    addNewPost,
    getUserProfile,
    getUserStatus,
    setUserStatus,
    updateUserStatus
} from "../../redux/Profile-reducer";
import {Redirect, useParams} from "react-router-dom";
import {useSelector} from "../common/hooks";
import {useDispatch} from "react-redux";

export const ProfileContainer = () => {

    const dispatch = useDispatch();
    const authUserId = useSelector(state => state.userAuth.id)

    const params = useParams<{ userId?: string | undefined }>()
    if (!params.userId) params.userId = String(authUserId);

    const profilePage = useSelector(state => state.profilePage)
    const isAuth = useSelector(state => state.userAuth.isAuth)

    useEffect(() => {
        if(isAuth) {
            dispatch(getUserProfile(Number(params.userId)));
            dispatch(getUserStatus(Number(params.userId)));
        }
    }, [params.userId, dispatch, isAuth])


    if (!isAuth) return <Redirect to='/login'/>

    return <Profile
        profilePage={profilePage}
        setUserStatus={setUserStatus}
        updateUserStatus={updateUserStatus}
        addNewPost={addNewPost}
    />;

}
