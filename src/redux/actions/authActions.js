import { SET_AUTH, SET_LOGOUT } from "../actionTypes";
import { initialAuthState } from "../../components/constants/initialAuthState";

export const setAuth = (auth) => {
    return  {type: SET_AUTH, payload: auth}
}

export const setLogout = () => {
    return {type: SET_LOGOUT, payload: initialAuthState}
}