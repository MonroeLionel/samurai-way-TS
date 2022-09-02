import React from "react";
import {connect} from "react-redux";
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
import axios from "axios";
import {Users} from "./Users";


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

class UsersAPIComponent extends React.Component<UsersStatePropsType> {


   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })

   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render() {


      return <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
      />
   }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);