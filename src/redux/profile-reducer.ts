import {postDataType} from "../App";
import {ActionType} from "./store";

type profileReducerType = {
   postData: Array<postDataType>
   newPostText: string
}

let inicialState: profileReducerType = {
   postData: [
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 1, message: `hello`, likeCount: 22},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 2, message: `шо как`, likeCount: 11},
      {id: 3, message: `чо кого ? `, likeCount: 12},
      {id: 3, message: `чо кого ? `, likeCount: 12},
   ],
   newPostText: 'ddddd',
}

const profileReducer = (state = inicialState, action: ActionType) => {
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