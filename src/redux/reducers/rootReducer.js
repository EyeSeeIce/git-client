import {combineReducers} from "redux";
import {userReducer} from "./usersReducer";
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    search: searchReducer,
})
