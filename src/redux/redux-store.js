import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reduser";
import authReducer from "./Auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;