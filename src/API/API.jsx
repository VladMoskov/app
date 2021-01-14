import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "c3bce8fd-51f4-4013-a5ad-075fa9155b21"
    }
});


export const UsersAPI = {

    follow(UserId) {
        return instance.post(`follow/` + UserId, {})
           .then(res => {
            return res.data.resultCode === 0;
        })
    },

    unfollow(UserId) {
        return instance.delete(`follow/` + UserId)
            .then(res => {
            return res.data.resultCode === 0;
        })
    }
}