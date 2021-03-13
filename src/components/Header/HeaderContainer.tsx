import React from 'react';
import {Header} from "./Header";
import {useSelector} from "../common/hooks";

export const HeaderContainer: React.FC = () => {


    const login = useSelector(state => state.userAuth.login)
    const isAuth = useSelector(state => state.userAuth.isAuth)


    return <Header isAuth={isAuth} login={login}/>
}