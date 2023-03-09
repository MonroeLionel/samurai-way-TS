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


type propsTypeProps1 = {
   profile: profileType | null
   status: string | null
   updateStatusTC: (status: string) => void
}

export function Profile(props: propsTypeProps1) {
   return (
     <div>
        <Profileinfo {...props} updateStatus={props.updateStatusTC} profile={props.profile} status={props.status}/>
        <MyPostsContainer/>
     </div>
   )
}