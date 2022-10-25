import exp from "constants";

export type usersReducerType = {
   user: userReducerType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
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
type ActionType =
  followACType
  | unFollowACType
  | setUsersACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | ToggleIsFetchingACType
  | ToggleFollowingInProgressACType


let inicialState: usersReducerType = {
   user: [],
   pageSize: 15,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
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
      case "TOGGLE-IS-FETCHING": {
         return {...state, isFetching: action.isFetching}
      }
      case "TOGGLE-IS-FOLLOWING_PROGRESS": {
         return {
            ...state,
            followingInProgress: action.followingInProgress
              ? [...state.followingInProgress, action.userId]
              : state.followingInProgress.filter((id) => id != action.userId)
         }
      }
      default:
         return state
   }
}

export const follow = (userId: number): followACType => ({type: "FOLLOW", userId: userId})
export const unFollow = (userId: number): unFollowACType => ({type: "UN-FOLLOW", userId: userId})
export const setUsers = (users: userReducerType): setUsersACType => ({type: "SET-USERS", users})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountACType => ({
   type: "SET-TOTAL-USERS-COUNT",
   totalCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => ({
   type: "TOGGLE-IS-FETCHING",
   isFetching
})

export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): ToggleFollowingInProgressACType => ({
   type: "TOGGLE-IS-FOLLOWING_PROGRESS",
   followingInProgress,
   userId
})

type ToggleIsFetchingACType = {
   type: "TOGGLE-IS-FETCHING"
   isFetching: boolean
}
type ToggleFollowingInProgressACType = {
   type: "TOGGLE-IS-FOLLOWING_PROGRESS"
   followingInProgress: boolean
   userId: number
}

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