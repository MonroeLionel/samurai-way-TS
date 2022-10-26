import {ActionType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

type authReducerType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean | null
}

let initialState: authReducerType = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}


const authReducer = (state = initialState, action: ActionType): authReducerType => {
   switch (action.type) {
      case  "SET-USER-DATA": {
         return {
            ...state, ...action.data,
            isAuth: true
         }
      }
      default :
         return state
   }
}

export const setAuthUserDataAC = (id: number, email: string, login: string,): setUserDataActionType => {
   return {
      type: "SET-USER-DATA",
      data: {
         id: id,
         email: email,
         login: login,
      }
   }
}

export type setUserDataActionType = {
   type: "SET-USER-DATA",
   data: {
      id: number
      email: string
      login: string
   }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
   authAPI.me()
     .then(response => {
        if (response.data.resultCode === 0) {
           let {id, email, login} = response.data.data
           dispatch(setAuthUserDataAC(id, email, login))
        }
     })
}

export default authReducer