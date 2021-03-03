import {payloadType, setAuthUserData} from "../../redux/Auth-reducer";
import {useDispatch} from "react-redux";

export const useAuthUserData = (userData: payloadType, code: number) => {

    const dispatch = useDispatch()
    code === 0
        ? dispatch(setAuthUserData(userData, true))
        : dispatch(setAuthUserData(userData, false))
}