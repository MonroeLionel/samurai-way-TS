import {StatePropsType} from "../index";
import profileReducer, {AddPostActionType, ChangeNewTextActionType, SetUserProfileType} from "./profile-reducer";
import dialogReducer, {sendMessageACType, updateNewMessageBodyAC} from "./dialog-reducer";

export type StoreType = {
   _state: StatePropsType
   // updateNewPostText: (newText: string) => void
   // addPost: () => void
   subscribe: (callback: (State: StatePropsType) => void) => void
   _callSubscriber: (state: StatePropsType) => void
   getState: () => StatePropsType
   dispatch: (action: ActionType) => void

}

export type ActionType =
  AddPostActionType
  | ChangeNewTextActionType
  | updateNewMessageBodyAC
  | sendMessageACType
  | SetUserProfileType

let store: StoreType = {
   _state: {
      profilepage: {
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
         profile: null
      },
      dialogsPage: {
         messageData: [
            {id: 1, message: `текст`},
            {id: 2, message: `еще текст`},
            {id: 2, message: `еще текст`},
            {id: 2, message: `еще текст`},
            {id: 2, message: `еще текст`},
            {id: 3, message: `типичная запись`},
            {id: 4, message: `типичная запись`},
            {id: 5, message: `типичная запись`},
            {id: 6, message: `типичная запись`},
         ],
         dialogData: [
            {id: 1, name: `света`},
            {id: 2, name: `дима`},
            {id: 3, name: `катя`},
            {id: 4, name: `аня`},
            {id: 5, name: `володя`},
            {id: 6, name: `павлуша`},
         ],
         newMessageBod: "",
      },
   },
   _callSubscriber(State: StatePropsType) {
   },

   getState() {
      return this._state
   },

   subscribe(observer: (State: StatePropsType) => void) {
      this._callSubscriber = observer
   },
   dispatch(action) {
      this._state.profilepage = profileReducer(this._state.profilepage, action)
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
      this._callSubscriber(this._state)


   },
}


export default store;

