import React from "react";
import {connect} from "react-redux";
// import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
   followAC,
   setCurrentPageAC, setTotalUsersCountAC,
   setUsersAC,
   unFollowAC,
   userReducerType,
   usersReducerType
} from "../../redux/users-reducer";
import UsersC from "./Users";


type MapStatePropsType = {

   users: userReducerType
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

type MapDispatchPropsTpe = {
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: userReducerType) => void
   setCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
}

export type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: state.usersPage.user,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,

   }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      follow: (userId: number) => {
         dispatch(followAC(userId))
      },
      unFollow: (userId: number) => {
         dispatch(unFollowAC(userId))
      },
      setUsers: (users: userReducerType) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (currentPage: number) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalCount: number) => {
         dispatch(setTotalUsersCountAC(totalCount))
      }
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);