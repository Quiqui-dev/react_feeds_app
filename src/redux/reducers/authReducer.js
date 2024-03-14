import { SET_AUTH, SET_LOGOUT} from "../actionTypes";
import { initialState } from "../initialState";

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case SET_AUTH:
            return action.payload
        case SET_LOGOUT:
            return action.payload
        default:
            return state
    }
}

export default authReducer