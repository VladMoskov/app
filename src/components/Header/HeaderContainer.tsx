import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {getAuthUserData} from '../../redux/Auth-reducer';
import {useSelector} from "../common/hooks";

export const HeaderContainer: React.FC = () => {

    const dispatch = useDispatch();

    const login = useSelector(state => state.userAuth.login)
    const isAuth = useSelector(state => state.userAuth.isAuth)

    useEffect(() => {
        dispatch(getAuthUserData())
    })

    return <Header isAuth={isAuth} login={login}/>
}