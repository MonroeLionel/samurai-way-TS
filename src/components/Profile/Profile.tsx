import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./Profileinfo/Profileinfo";


export function Profile() {
   return (
     <div>
        <Profileinfo/>
        <MyPosts/>
     </div>
   )
}