import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, userReducerType, usersReducerType} from "../../redux/users-reducer";


type MapStatePropsType = {

   users: userReducerType
}

type MapDispatchPropsTpe = {
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: userReducerType) => void
}

export type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: state.usersPage.user
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
      }

   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);