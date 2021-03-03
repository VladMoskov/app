const ADD_MESSAGE = 'Dialog-reducer/ADD-MESSAGE';


export type contactItemDataType = {
    id: number;
    name: string;
}

export type messageItemDataType = {
    id: number;
    message: string;
    imSender: boolean;
}


export type initialStateType = {
    contactItemData: Array<contactItemDataType>;
    messageItemData: Array<messageItemDataType>;
}


let initialState: initialStateType = {
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

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                messageItemData: [...state.messageItemData, action.message]
            }
        }

        default:
            return state;
    }
}


type addMessageActionType = {
    type: typeof ADD_MESSAGE;
    message: string;
};

export const addMessage = (message: string): addMessageActionType => ({type: ADD_MESSAGE, message});

export default dialogsReducer;