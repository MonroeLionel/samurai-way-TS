import React, {ChangeEvent, ChangeEventHandler, LegacyRef} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postDataType} from "../../../App";
import {ActionType} from "../../../redux/state";

type postDataPropsTpe = {
   postData: Array<postDataType>
   // addPost: () => void
   newPostText: string
   // updateNewPostText: (newText: string) => void
   dispatch: (action: ActionType) => void
}

export function MyPosts(props: postDataPropsTpe) {

   let postsElements = props.postData.map((post) => {
      return <Post message={post.message} likeCount={post.likeCount} id={post.id}/>
   })

   let newPostElement = React.createRef<HTMLTextAreaElement>()

   const addPost = () => {
      let text = newPostElement.current
      if (text) {
         console.log(text.value)
         // props.addPost()
         props.dispatch({type: "ADD-POST"})
      }
   }

   let onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let text = event.currentTarget.value
      props.dispatch({type: "CHANGE-NEW-TEXT", newText: text})
   }

   return (
     <div className={classes.postsBlock}>
        <div><h3>мои посты</h3></div>
        <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea></div>
        <div>
           <button onClick={addPost
           }>добавить пост
           </button>
        </div>
        <div className={classes.post}>
           {postsElements}
        </div>
     </div>
   )
}