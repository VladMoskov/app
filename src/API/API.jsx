import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "a7e95eef-6fca-4ad6-b80e-e336c169fca5"
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
    },

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
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
    },
}