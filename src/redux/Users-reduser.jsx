const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            name: 'Vlad M.',
            imgUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
            status: 'this is my status',
            followed: true,
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: 2,
            name: 'Leha K.',
            imgUrl: 'https://ps.w.org/wp-smushit/assets/icon-256x256.gif?rev=2263432',
            status: 'im kachek',
            followed: false,
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: 3,
            name: 'Romchik N.',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU',
            status: 'hello world',
            followed: false,
            location: {country: 'Moldova', city: 'Zbarazh'}
        },
        {
            id: 4,
            name: 'Max N.',
            imgUrl: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
            status: 'code code code',
            followed: true,
            location: {country: 'U.S.A.', city: 'New-York'}
        },
    ]
}

const usersReducer = (state = initialState, action) => {
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