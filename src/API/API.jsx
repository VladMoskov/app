import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "17f0863b-7bf6-40fb-b94c-ef5734f258c3"
    }
});


export const UsersAPI = {

    follow(userId) {
        return instance.post(`follow/` + userId, {})
            .then(res => {
                return res.data.resultCode === 0;
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/` + userId)
            .then(res => {
                return res.data.resultCode === 0;
            })
    }
}

export const AuthAPI = {

    getAuth() {
        return instance.get('auth/me')
    },
}


export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }
}