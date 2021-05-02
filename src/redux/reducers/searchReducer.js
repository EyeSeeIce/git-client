import {SEARCH_TEXT} from "../type/types";

const initial = {
    text: ''
}

export const searchReducer = (state = initial, action) => {
    switch (action.type){
        case SEARCH_TEXT:
            return { ...state, text: action.payload}
        default:
            return state
    }

    return state
}
