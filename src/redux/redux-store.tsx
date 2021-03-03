import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reduser";
import authReducer from "./Auth-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    form: formReducer
});

type RootReducersType = typeof rootReducers;
export type GlobalStateType = ReturnType<RootReducersType>

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;