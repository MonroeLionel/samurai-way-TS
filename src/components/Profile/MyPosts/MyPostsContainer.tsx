import React from "react";
import {dialogDataType, messageDataType, postDataType, StatePropsType} from "../../../App";
import {ActionType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialog/Dialog";

type postDataPropsTpe = {
   store: StatePropsType
}


// export function MyPostsContainer1(props: postDataPropsTpe) {
//
//
//    const addPost = () => {
//       props.store.dispatch(addPostAC())
//    }
//
//    let onPostChange = (text: string) => {
//       props.store.dispatch(updateNewPostTextAC(text))
//    }
//
//    return (
//
//      <MyPosts
//        updateNewPostText={onPostChange}
//        postData={props.store.State.profilepage.postData}
//        newPostText={props.store.State.profilepage.newPostText}
//        addPost={addPost}
//
//      />)
// }


type MapStatePropsType = {
   newPostText: string
   postData: Array<postDataType>

}

type MapDispatchPropsTpe = {
   addPost: () => void
   onPostChange: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsTpe

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      newPostText: state.profilepage.newPostText,
      postData: state.profilepage.postData
   }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsTpe => {
   return {
      addPost: () => {
         dispatch(addPostAC())
      },
      onPostChange: (text: string) => {
         dispatch(updateNewPostTextAC(text))
      }
   }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);