import dialogsReducer from "./Dialogs-reduсer";
import postsReducer from "./Posts-reducer";

let store = {
    _state: {
        dialogsPage: {

            contactItemData: [
                {id: 1, name: 'Nic'},
                {id: 2, name: 'Jon'},
                {id: 3, name: 'Alibaba'},
                {id: 4, name: 'Artur'},
                {id: 5, name: 'Josef'}
            ],

            messageItemData: [
                {id: 1, message: 'message 1', imSender: false},
                {id: 2, message: 'message 2', imSender: true},
                {id: 3, message: 'message 3', imSender: false},
                {id: 4, message: 'message 4', imSender: true},
                {id: 5, message: 'message 5', imSender: true}
            ],

            newMessageText: '',

        },

        postsPage: {
            postsData: [
                {id: 1, text: 'May the force be with you', likesCount: 11},
                {id: 1, text: 'Fallow the force', likesCount: 9}
            ],

            postText: '',
        }
    },

    _rerenderEntireTree() {
        console.log('rerender was used');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {

        dialogsReducer(this._state, action);
        postsReducer(this._state, action);

        this._rerenderEntireTree(this._state);

    },
}

export default store;