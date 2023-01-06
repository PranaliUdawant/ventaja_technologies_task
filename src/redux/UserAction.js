import axios from "axios"
import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./UserConstant"


export const RegisterUser = (userData) => async dispatch => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/users", userData)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: userData })
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.message })

    }
}

export const GetAllUsers = () => async dispatch => {
    try {
        dispatch({ type: GET_USERS_REQUEST })
        const { data } = await axios.get("http://localhost:5000/users")
        dispatch({ type: GET_USERS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error.message })

    }
}