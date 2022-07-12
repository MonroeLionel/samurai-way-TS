import React, {LegacyRef} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postDataType} from "../../../App";

type postDataPropsTpe = {
   postData: Array<postDataType>
   addPost: (postMessge: string) => void
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
         props.addPost(text.value)
      }


   }

   return (
     <div className={classes.postsBlock}>
        <div><h3>мои посты</h3></div>
        <div><textarea ref={newPostElement}></textarea></div>
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