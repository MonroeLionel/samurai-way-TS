import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
   followSuccess, followThunkCreator, getUsersThunkCreator,
   setCurrentPage,
   setTotalUsersCount, setUsers, toggleFollowingProgress,
   toggleIsFetching, unFollowSuccess, unFollowThunkCreator,
   userReducerType,
   usersReducerType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "./../../assets/images/loading.svg";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "../Dialog/Dialog";


type MapStatePropsType = {

   users: userReducerType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
}

type MapDispatchPropsTpe = {
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: userReducerType) => void
   setCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
   toggleFollowingProgress: (FollowingProgress: boolean, userId: number) => void
   getUsersThunkCreator: (currentPage: number, pageSize: number) => void
   followThunkCreator: (userId: number) => void
   unFollowThunkCreator: (userId: number) => void
}

export type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

class UsersAPIComponent extends React.Component<UsersStatePropsType> {


   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
      // this.props.toggleIsFetching(true)
      //
      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      //   .then(data => {
      //      this.props.toggleIsFetching(false)
      //      this.props.setUsers(data.items)
      //      this.props.setTotalUsersCount(data.totalCount)
      //
      //   })

   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

      // this.props.setCurrentPage(pageNumber)
      // this.props.toggleIsFetching(true)
      //
      // usersAPI.getUsers(pageNumber, this.props.pageSize)
      //   .then(data => {
      //      this.props.toggleIsFetching(false)
      //      this.props.setUsers(data.items)
      //
      //   })
   }

   render() {


      return <>
         {this.props.isFetching ? <Preloader/> : null}
         <Users
           totalUsersCount={this.props.totalUsersCount}
           pageSize={this.props.pageSize}
           currentPage={this.props.currentPage}
           onPageChanged={this.onPageChanged}
           users={this.props.users}
           follow={this.props.follow}
           unFollow={this.props.unFollow}
           toggleFollowingProgress={this.props.toggleFollowingProgress}
           followingInProgress={this.props.followingInProgress}
           followThunkCreator={this.props.followThunkCreator}
           unFollowThunkCreator={this.props.unFollowThunkCreator}
         />
      </>
   }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: state.usersPage.user,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}
let AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)

export const UsersContainer = connect(mapStateToProps, {
   follow: followSuccess,
   unFollow: unFollowSuccess,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   toggleFollowingProgress,
   getUsersThunkCreator,
   followThunkCreator,
   unFollowThunkCreator,
})(AuthRedirectComponent);