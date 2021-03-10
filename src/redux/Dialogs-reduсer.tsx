import {Reducer} from "redux";

const ADD_MESSAGE = 'Dialog-reducer/ADD-MESSAGE';

type TInitialState = {
    contactItemData: {
        id: number
        name: string
    }[]
    messageItemData: {
        id: number;
        message: string;
        imSender: boolean;
    }[]
}

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

const dialogsReducer: Reducer<TInitialState, TActions> = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                messageItemData: [...state.messageItemData, {
                    id: state.messageItemData.length,
                    message: action.message,
                    imSender: true
                }]
            }
        }

        default:
            return state;
    }
}

type TActions = TAddMessageActionType

type TAddMessageActionType = {
    type: typeof ADD_MESSAGE;
    message: string;
};

export const addMessage = (message: string): TAddMessageActionType => ({type: ADD_MESSAGE, message});

export default dialogsReducer;