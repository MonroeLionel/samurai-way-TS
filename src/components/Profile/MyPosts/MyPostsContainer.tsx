import React from "react";
import {postDataType, StatePropsType} from "../../../App";
import {ActionType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type postDataPropsTpe = {
   store: StatePropsType
}


export function MyPostsContainer(props: postDataPropsTpe) {


   const addPost = () => {
      props.store.dispatch(addPostAC())
   }

   let onPostChange = (text: string) => {
      props.store.dispatch(updateNewPostTextAC(text))
   }

   return (
     <MyPosts
       updateNewPostText={onPostChange}
       postData={props.store.State.profilepage.postData}
       newPostText={props.store.State.profilepage.newPostText}
       addPost={addPost}

     />)
}