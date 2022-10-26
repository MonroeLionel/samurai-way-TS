import React from "react";
import css from "./users.module.css";
import userGIF from "../../assets/images/user.gif";
import {
   followThunkCreator,
   toggleFollowingProgress,
   unFollowThunkCreator,
   userReducerType
} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   users: userReducerType
   follow: (userId: number) => void
   unFollow: (userId: number) => void
   toggleFollowingProgress: (FollowingProgress: boolean, userId: number) => void
   followingInProgress: Array<number>
   followThunkCreator: (userId: number) => void
   unFollowThunkCreator: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

   let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []

   for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
   }

   return (

     <div>
        <div>
           {pages.map(p => {
              return <span
                className={props.currentPage === p ? css.selectedPage : ""}
                onClick={() => {
                   props.onPageChanged(p)
                }}
              >{p}</span>
           })}


        </div>
        {props.users.map(el => <div key={el.id}>
   <span>
     <div>
        <NavLink to={'/profile/' + el.id}>
       <img className={css.userPhoto}
            src={el.photos.small != null ? el.photos.small : userGIF}/>
           </NavLink>
   </div>
   <div>
   {el.followed ?
     <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
        props.unFollowThunkCreator(el.id)
    
     }
     }>Follow</button>
     : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {

        props.followThunkCreator(el.id)

     }
     }>Unfoolow</button>}

   </div>
   </span>
           <span>
   <span>
     <div></div>
   <div></div>
   </span>
   <span>
   <div>{el.name}</div>  <div>{el.status}</div>

   </span>
   <span>
   <div>{"el.location.country"}</div>
   <div>{"el.location.city"}</div>
   </span>
   </span>
        </div>)}
     </div>

   )
}

