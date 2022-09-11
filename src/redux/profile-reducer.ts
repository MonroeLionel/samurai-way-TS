import {postDataType, profileType} from "../App";
import {ActionType} from "./store";

type profileReducerType = {
   postData: Array<postDataType>
   newPostText: string
   profile: profileType | null
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
   profile: {
      aboutMe: " string | null",
      contacts: {
         facebook: "string | null",
         website: "string | null",
         vk: "string | null",
         twitter: "string | null",
         instagram: "string | null",
         youtube: "string | null",
         github: "string | null",
         mainLink: "string | null"
      },
      lookingForAJob: false,
      lookingForAJobDescription: "string | null",
      fullName: "string | null",
      userId: 123,
      photos: {
         small: "string",
         large: "string"
      }
   }
}

const profileReducer = (state = inicialState, action: ActionType): profileReducerType => {
   switch (action.type) {
      case "ADD-POST": {
         return {
            ...state,
            postData: [...state.postData, {
               id: 13,
               message: state.newPostText,
               likeCount: 12
            }],
            newPostText: ''
         }
      }
      case "CHANGE-NEW-TEXT": {
         return {
            ...state,
            newPostText: action.newText
         }
      }
      case "SET-USER-PROFILE": {
         debugger
         return {
            ...state, profile: action.profile
         }
      }
      default:
         return state
   }
}

export const addPostAC = (): AddPostActionType => {
   return {type: "ADD-POST"}
}
export const updateNewPostTextAC = (newText: string): ChangeNewTextActionType => {
   return {
      type: "CHANGE-NEW-TEXT",
      newText: newText
   }
}
export const setUserProfile = (profile: profileType): SetUserProfileType => {
   console.log(profile)
   return {
      type: "SET-USER-PROFILE",
      profile: profile
   }
}
export type ChangeNewTextActionType = {
   type: "CHANGE-NEW-TEXT",
   newText: string
}
export  type AddPostActionType = {
   type: "ADD-POST",
}
export  type SetUserProfileType = {
   type: "SET-USER-PROFILE",
   profile: profileType
}
export default profileReducer;