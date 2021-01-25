import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return <div className={s.container}>
        <h1>LOGIN</h1>
        <LoginContainer/>
    </div>
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

const LoginContainer = reduxForm({
    form: 'login'
})(LoginForm);


export default Login;