import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts() {
   return (
     <div className={classes.postsBlock}>
        <div><h3>мои посты</h3></div>
        <div><textarea></textarea></div>
        <div>
           <button>добавить пост</button>
        </div>
        <div className={classes.post}>
           <Post message={`hello`} likeCount={22}/>
           <Post message={`шо как `} likeCount={4}/>


        </div>
     </div>
   )
}