import exp from "constants";

export type usersReducerType = {
   user: userReducerType
}

export type userReducerType = Array<userObjReducerType>
export type userObjReducerType = {
   id: number
   photos: {
      small: string
      large: string
   },
   followed: boolean
   name: string
   status: string
   location: {
      city: string
      country: string
   }
}
type ActionType = followACType | unFollowACType | setUsersACType


let inicialState: usersReducerType = {
   user: [],
}


const usersReducer = (state = inicialState, action: ActionType): usersReducerType => {
   switch (action.type) {
      case "FOLLOW": {
         return {
            ...state,
            user: state.user.map(el => el.id === action.userId ? {...el, followed: true} : el)
         }
      }
      case "UN-FOLLOW": {
         return {
            ...state,
            user: state.user.map(el => el.id === action.userId ? {...el, followed: false} : el)
         }
      }
      case "SET-USERS": {
         return {...state, user: [...state.user, ...action.users]}
      }
      default:
         return state
   }
}

export const followAC = (userId: number): followACType => ({type: "FOLLOW", userId: userId})
export const unFollowAC = (userId: number): unFollowACType => ({type: "UN-FOLLOW", userId: userId})
export const setUsersAC = (users: userReducerType): setUsersACType => ({type: "SET-USERS", users})
type followACType = {
   type: "FOLLOW"
   userId: number
}
type unFollowACType = {
   type: "UN-FOLLOW"
   userId: number
}
type setUsersACType = {
   type: "SET-USERS"
   users: userReducerType
}

export default usersReducer;