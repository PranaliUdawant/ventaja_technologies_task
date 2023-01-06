import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./UserConstant";


export const userReducer = (state = { users: [] }, { payload, type }) => {
    switch (type) {
        case REGISTER_USER_REQUEST: return { ...state, register: false }
        case REGISTER_USER_SUCCESS: return { ...state, registerusers: payload, register: true }
        case REGISTER_USER_FAIL: return { ...state }

        case GET_USERS_REQUEST: return { ...state }
        case GET_USERS_SUCCESS: return { ...state, users: payload, getusers: true }
        case GET_USERS_FAIL: return { ...state }
        default: return state;

    }
}