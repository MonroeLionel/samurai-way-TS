import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
   profilepage: profileReducer,
   dialogsPage: dialogReducer,
   usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store;