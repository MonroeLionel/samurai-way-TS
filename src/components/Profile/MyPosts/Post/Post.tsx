import React from "react";
import classes from "./Post.module.css";

type messageType = {
   message: string
   likeCount: number
   id: number
}

export function Post(props: messageType) {
   return (
     <div>
        <div className={classes.item}>
           <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt=""/>
           {props.message}
           <div>
              <span>like </span>{props.likeCount}
           </div>
        </div>
     </div>
   )
}