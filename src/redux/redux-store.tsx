import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
   profilepage: profileReducer,
   dialogsPage: dialogReducer,
   usersPage: usersReducer,
   auth: authReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store;