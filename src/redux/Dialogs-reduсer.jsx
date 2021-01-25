const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            debugger
            return {
                ...state,
                messageItemData: [...state.messageItemData, action.message]
            }
        }

        default:
            return state;
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer;