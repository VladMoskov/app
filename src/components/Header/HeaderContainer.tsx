import React, {useEffect, useState} from 'react';
import Header from "./Header";
import {useSelector} from "react-redux";
import {AuthAPI} from "../../API/API";
import {useAuthUserData} from '../common/hooks';
import {GlobalStateType} from "../../redux/redux-store";

let InitialState = {
    resultCode: 1,
    data: {
        id: null,
        email: null,
        login: null
    }
}

type InitType = typeof InitialState

export const HeaderContainer: React.FC = () => {

    let [response, setResponse] = useState<InitType>(InitialState)

    const login: string | null = useSelector((state: GlobalStateType) => state.userAuth.login)
    const isAuth: boolean = useSelector((state: GlobalStateType) => state.userAuth.isAuth)

    useEffect(() => {
        AuthAPI.getAuth()
            .then((res: any) => setResponse(res.data))
    }, [])

    useAuthUserData(response.data, response.resultCode)

    return <Header isAuth={isAuth} login={login}/>
}
