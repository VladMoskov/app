import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reduser";
import authReducer from "./Auth-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
window.state = store.getState();

export default store;