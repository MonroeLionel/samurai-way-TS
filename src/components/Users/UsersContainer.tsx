import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
   follow,
   setCurrentPage,
   setTotalUsersCount, setUsers,
   toggleIsFetching, unFollow,
   userReducerType,
   usersReducerType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "./../../assets/images/loading.svg";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {

   users: userReducerType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
}

type MapDispatchPropsTpe = {
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   setUsers: (users: userReducerType) => void
   setCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
}

export type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

class UsersAPIComponent extends React.Component<UsersStatePropsType> {


   componentDidMount() {
      this.props.toggleIsFetching(true)
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      //    withCredentials: true
      // })
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
           this.props.toggleIsFetching(false)
           this.props.setUsers(data.items)
           this.props.setTotalUsersCount(data.totalCount)

        })

   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      //    withCredentials: true
      // })
      usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
           this.props.toggleIsFetching(false)
           this.props.setUsers(data.items)

        })
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
   }
}
//
// let mapDispatchToProps = (dispatch: Dispatch) => {
//    return {
//       follow: (userId: number) => {
//          dispatch(followAC(userId))
//       },
//       unFollow: (userId: number) => {
//          dispatch(unFollowAC(userId))
//       },
//       setUsers: (users: userReducerType) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (currentPage: number) => {
//          dispatch(setCurrentPageAC(currentPage))
//       },
//       setTotalUsersCount: (totalCount: number) => {
//          dispatch(setTotalUsersCountAC(totalCount))
//       },
//       toggleIsFetching: (isFetching: boolean) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }
// }

export const UsersContainer = connect(mapStateToProps, {
   follow,
   unFollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
})(UsersAPIComponent);