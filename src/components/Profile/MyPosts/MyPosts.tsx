import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postDataType} from "../../../App";

type postDataPropsTpe = {
   postData: Array<postDataType>
}

export function MyPosts(props: postDataPropsTpe) {

   let postsElements = props.postData.map((post) => {
      return <Post message={post.message} likeCount={post.likeCount} id={post.id}/>
   })
   return (
     <div className={classes.postsBlock}>
        <div><h3>мои посты</h3></div>
        <div><textarea></textarea></div>
        <div>
           <button>добавить пост</button>
        </div>
        <div className={classes.post}>
           {postsElements}


        </div>
     </div>
   )
}