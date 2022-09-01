import exp from "constants";

export type usersReducerType = {
   user: userReducerType
   pageSize: number
   totalUsersCount: number
   currentPage: number
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
type ActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType


let inicialState: usersReducerType = {
   user: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1

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
         return {...state, user: [...action.users]}
      }
      case "SET-CURRENT-PAGE": {
         return {...state, currentPage: action.currentPage}
      }
      case "SET-TOTAL-USERS-COUNT": {
         return {...state, totalUsersCount: action.totalCount}
      }
      default:
         return state
   }
}

export const followAC = (userId: number): followACType => ({type: "FOLLOW", userId: userId})
export const unFollowAC = (userId: number): unFollowACType => ({type: "UN-FOLLOW", userId: userId})
export const setUsersAC = (users: userReducerType): setUsersACType => ({type: "SET-USERS", users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountACType => ({
   type: "SET-TOTAL-USERS-COUNT",
   totalCount
})


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
type setCurrentPageACType = {
   type: "SET-CURRENT-PAGE"
   currentPage: number
}
type setTotalUsersCountACType = {
   type: "SET-TOTAL-USERS-COUNT"
   totalCount: number
}


export default usersReducer;