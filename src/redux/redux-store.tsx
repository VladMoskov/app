import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reduser";
import authReducer from "./Auth-reducer";
import thunk from 'redux-thunk';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});

type RootReducersType = typeof rootReducers;
export type GlobalStateType = ReturnType<RootReducersType>


let store = createStore(rootReducers, applyMiddleware(thunk));


// @ts-ignore
window.store = store;

export default store;

