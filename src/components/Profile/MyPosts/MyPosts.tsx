import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts() {
   let postData = [
      {id: 1, message: `hello`, likeCount: 22},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 3, message: `чо кого ? `, likeCount: 12},
   ]

   return (
     <div className={classes.postsBlock}>
        <div><h3>мои посты</h3></div>
        <div><textarea></textarea></div>
        <div>
           <button>добавить пост</button>
        </div>
        <div className={classes.post}>
           <Post message={postData[0].message} likeCount={postData[0].likeCount} id={postData[0].id}/>
           <Post message={postData[1].message} likeCount={postData[1].likeCount} id={postData[1].id}/>


        </div>
     </div>
   )
}