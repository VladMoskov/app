import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/Auth-reducer";
import {AuthAPI} from "../../API/API";

class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthAPI.getAuth()
            .then(res => {
               res.data.resultCode === 0
                   ?this.props.setAuthUserData(res.data.data, true)
                   :this.props.setAuthUserData(res.data.data, false)
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.userAuth.isAuth,
        login: state.userAuth.login
    })
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);