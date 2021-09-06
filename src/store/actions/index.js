import { USERS_SET, USERS_DELETE } from "../reducers";
import usersApi from "../../utils/usersApi";

export const fetchTodos = () => {
    return (dispatch) => {
        usersApi.get()
        .then(response => {
            dispatch({
                type: USERS_SET,
                payload: response.data
            })
        });
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        usersApi.delete(`/${id}`)
        .then(() => {
            dispatch({
                type: USERS_DELETE,
                payload: id
            })
        });
    }
}