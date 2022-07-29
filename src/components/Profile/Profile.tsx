import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Profileinfo} from "./Profileinfo/Profileinfo";
import {postDataType} from "../../App";
import {ActionType} from "../../redux/state";

type propsTypeProps = {
   profilepage: {
      postData: Array<postDataType>
      newPostText: string
   }
   // addPost: () => void
   // updateNewPostText: (newText: string) => void
   dispatch: (action: ActionType) => void

}

export function Profile(props: propsTypeProps) {
   return (
     <div>
        <Profileinfo/>
        <MyPosts

          postData={props.profilepage.postData}
          newPostText={props.profilepage.newPostText}
          //   addPost={props.addPost}/>
          // updateNewPostText={props.updateNewPostText}
          dispatch={props.dispatch}
        />
     </div>
   )
}