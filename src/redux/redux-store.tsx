import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
   profilepage: profileReducer,
   dialogsPage: dialogReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;