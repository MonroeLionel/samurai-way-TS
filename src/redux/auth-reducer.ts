import {ActionType} from "./store";

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

export default authReducer