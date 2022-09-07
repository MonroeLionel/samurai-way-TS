import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {postDataType, profileType, StatePropsType} from "../../App";
import {ActionType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type propsTypeProps = {
   store: StatePropsType

}

export function Profile(props: profileType) {
   return (
     <div>
        <Profileinfo profile={props.profile}/>
        <MyPostsContainer/>
     </div>
   )
}