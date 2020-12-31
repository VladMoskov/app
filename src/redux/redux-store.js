import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Dialogs-reduсer";
import postsReducer from "./Posts-reducer";
import usersReducer from "./Users-reduser";

let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;