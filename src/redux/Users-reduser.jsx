const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {

        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed: !user.followed}
                    return user
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW_TOGGLE, userId});

export const setUserAC = (users) => ({type: SET_USERS, users});

export default usersReducer;