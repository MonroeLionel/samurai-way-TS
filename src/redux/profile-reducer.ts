import {postDataType} from "../App";
import {ActionType} from "./state";

type profileReducerType = {
   postData: Array<postDataType>
   newPostText: string
}


const profileReducer = (state: profileReducerType, action: ActionType) => {
   switch (action.type) {
      case "ADD-POST":
         let newPost = {
            id: 13,
            message: state.newPostText,
            likeCount: 12
         }
         state.postData.push(newPost)
         state.newPostText = ''
         return state
      case "CHANGE-NEW-TEXT":
         state.newPostText = action.newText
         return state
      default:
         return state
   }
}

export const addPostAC = (): AddPostActionType => {
   return {type: "ADD-POST"}
}
export const updateNewPostTextAC = (newText: string): ChangeNewTextActionType => {
   console.log(newText)
   return {
      type: "CHANGE-NEW-TEXT",
      newText: newText
   }
}
export type ChangeNewTextActionType = {
   type: "CHANGE-NEW-TEXT",
   newText: string
}
export  type AddPostActionType = {
   type: "ADD-POST",
   // postText: string
}
export default profileReducer;