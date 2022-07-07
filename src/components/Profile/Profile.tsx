import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {postDataType} from "../../App";

type propsTypeProps = {

   postData: Array<postDataType>
}

export function Profile(props: propsTypeProps) {
   return (
     <div>
        <Profileinfo/>
        <MyPosts postData={props.postData}/>
     </div>
   )
}