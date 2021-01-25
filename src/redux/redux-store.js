import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reduser";
import authReducer from "./Auth-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
window.store = store;
window.state = store.getState();

export default store;