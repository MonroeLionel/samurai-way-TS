import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts() {
   let postData = [
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 3, message: `чо кого ? `, likeCount: 12},
      {id: 3, message: `чо кого ? `, likeCount: 12},
   ]
   let postsElements = postData.map((post) => {
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