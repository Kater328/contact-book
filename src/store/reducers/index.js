export const USERS_SET = "USERS SET";
export const USERS_DELETE = "USERS DELETE";

const initialState = {
    users: [],
    editingUser: {}
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case USERS_SET:
            return {
                ...state, 
                users: payload
            };
        case USERS_DELETE:
            return {
                ...state, 
                users: state.users.filter(item => item.id !== payload)
            };
        default: 
            return state;
    }
}

export default reducer;