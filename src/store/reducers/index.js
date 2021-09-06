export const USERS_SET = "USERS SET";
export const USERS_DELETE = "USERS DELETE";
export const USERS_ADD = "USERS ADD";
export const USERS_UPDATE = "USERS UPDATE";
export const ACTION_SELECT_USER = "SELECT USER";
export const ACTION_CLEAR_FORM = "CLEAR FORM";

const getEmptyUser = () => {
    return {
        name: "",
        surname: "",
        email: "",
    };
}

const initialState = {
    users: [],
    editingUser: getEmptyUser()
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
        case USERS_ADD:
            return {
                ...state, 
                users: [...state.users, payload]
            };  
        case USERS_UPDATE:
            return {
                ...state,
                users: state.users.map(
                    item =>
                      item.id === payload.id ?
                        payload : item
                ),
            };        
        case ACTION_SELECT_USER:
            return {
                ...state, 
                editingUser: payload
            };        
        case ACTION_CLEAR_FORM:
            return {
                ...state, 
                editingUser: getEmptyUser()
            };
        default: 
            return state;
    }
}

export default reducer;