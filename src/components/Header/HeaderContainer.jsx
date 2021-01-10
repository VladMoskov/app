import React from 'react';
import s from './Header.module.css';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(res => {
                this.props.setAuthUserData(res.data.data);
            })
    }

    render() {
        return <Header className={s.login}{...this.props} />
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.userAuth.isAuth,
        login: state.userAuth.login
    })
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);