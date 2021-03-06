import './App.css';
import './Reset.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import FindUsers from "./components/FindUsers/FindUsers";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {getAuthUserData} from "./redux/Auth-reducer";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthUserData())
    })

    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>
                       }/>
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer/>
                       }/>
                <Route path="/news"
                       render={() => <News/>}/>
                <Route path="/music"
                       render={() => <Music/>}/>
                <Route path="/find-users"
                       render ={() => <FindUsers />}/>
                <Route path="/settings"
                       render={() => <Settings/>}/>
                <Route path="/login"
                       render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
