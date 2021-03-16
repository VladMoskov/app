import axios from "axios";
import {IUser} from "../redux/Users-reduser";
import {IProfile} from "../redux/Profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "a7e95eef-6fca-4ad6-b80e-e336c169fca5"
    }
});

type TFollowResponse = {
    resultCode: number
    messages: Array<string>,
    data: object
}

type TGetUsersResponse = {
    items: Array<IUser>
    totalCount: number

}

export const UsersAPI = {

    follow(userId: number) {
        return instance.post<TFollowResponse>(`follow/` + userId, {})
    },

    unfollow(userId: number) {
        return instance.delete<TFollowResponse>(`follow/` + userId)
    },

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<TGetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
    },
}



export type UserPayloadType = {
    id: number | null
    email: string | null
    login: string | null
}

type TResponse = {
    resultCode: number
    messages: string[]
    data: UserPayloadType
}

export const AuthAPI = {

    getAuth() {
        return instance.get<TResponse>('auth/me').then(res => res.data)
    },
}

type TUpdateStatusResponse = {
    data: object,
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}

export const ProfileAPI = {
    getProfile(userId: number | undefined) {
        return instance.get<IProfile>(`profile/` + userId).then(res => res.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data)
    },

    updateStatus(status: string) {
        return instance.put<TUpdateStatusResponse>(`profile/status`, {status})
    },

    updateProfile(profile: IProfile) {
        return instance.put<TUpdateStatusResponse>(`profile`, profile)
    },

    updateAvatar(formData: any) {
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}