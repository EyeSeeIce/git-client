import {GET_USER_DATA, SET_DIR, SET_REPO, SET_URL, SET_USER_DATA, SET_USERS} from "../type/types";

const initial = {
    users: [],
    user_data: [],
    repo: []
}

export const userReducer = (state = initial, action) => {
    switch (action.type){
        case SET_USERS:
            return {...state, users: action.payload.items}
        case SET_USER_DATA:
            return {...state, user_data: action.payload}
        case SET_REPO:
            return {...state, repo: action.payload}
        case SET_URL:
            return { ...state, url: action.payload}
        case SET_DIR:
            return {...state, dir: action.payload}
        default:
            return state
    }

    return state
}
