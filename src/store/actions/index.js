import { USERS_SET, USERS_DELETE, USERS_ADD, USERS_UPDATE, ACTION_SELECT_USER, ACTION_CLEAR_FORM } from "../reducers";
import usersApi from "../../utils/usersApi";

export const fetchUsers = () => {
    return (dispatch) => {
        usersApi.get()
        .then(({data}) => {
            dispatch({
                type: USERS_SET,
                payload: data
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

export const createUser = (user) => {
    return (dispatch) => {
        usersApi.post('', {
            name: user.name,
            surname: user.surname,
            email: user.email
        })
        .then(({data}) => {
            dispatch({
                type: USERS_ADD,
                payload: data
            })
        });
    }
}

export const updateUser = (user) => {
    return (dispatch) => {
        usersApi.put(`/${user.id}`, {...user})
        .then(({data}) => {
            dispatch({
                type: USERS_UPDATE,
                payload: data
            })
        });
    }
}

export const fillForm = (user) => ({
    type: ACTION_SELECT_USER,
    payload: user
});

export const clearForm = () => ({
    type: ACTION_CLEAR_FORM
});