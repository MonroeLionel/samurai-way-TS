import {StatePropsType} from "../index";

export type StoreType = {
   _state: StatePropsType
   // updateNewPostText: (newText: string) => void
   // addPost: () => void
   subscribe: (callback: (State: StatePropsType) => void) => void
   _callSubscriber: (state: StatePropsType) => void
   getState: () => StatePropsType
   dispatch: (action: ActionType) => void
}

type AddPostActionType = {
   type: "ADD-POST",
   // postText: string
}
type ChangeNewTextActionType = {
   type: "CHANGE-NEW-TEXT",
   newText: string
}


export type ActionType = AddPostActionType | ChangeNewTextActionType

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

      },
   },
   _callSubscriber(State: StatePropsType) {
   },

   getState() {
      return this._state
   },
   // addPost() {
   //    let newPost = {id: 13, message: this._state.profilepage.newPostText, likeCount: 12}
   //    this._state.profilepage.postData.push(newPost)
   //    this._state.profilepage.newPostText = ''
   //    this._callSubscriber(this._state)
   // },
   // updateNewPostText(newText: string) {
   //    this._state.profilepage.newPostText = newText
   //    this._callSubscriber(this._state)
   // },
   subscribe(observer: (State: StatePropsType) => void) {
      this._callSubscriber = observer
   },
   dispatch(action) {
      if (action.type === "ADD-POST") {
         let newPost = {
            id: 13,
            message: this._state.profilepage.newPostText,
            // message: action.postText,
            likeCount: 12
         }
         this._state.profilepage.postData.push(newPost)
         this._state.profilepage.newPostText = ''
         this._callSubscriber(this._state)
      } else if (action.type === "CHANGE-NEW-TEXT") {
         this._state.profilepage.newPostText = action.newText
         this._callSubscriber(this._state)
      }
   },
}
//
// let state = {
//    profilepage: {
//       postData: [
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 1, message: `hello`, likeCount: 22},
//          {id: 2, message: `шо как`, likeCount: 11},
//          {id: 2, message: `шо как`, likeCount: 11},
//          {id: 2, message: `шо как`, likeCount: 11},
//          {id: 3, message: `чо кого ? `, likeCount: 12},
//          {id: 3, message: `чо кого ? `, likeCount: 12},
//       ],
//       newPostText: 'ddddd',
//
//    },
//    dialogsPage: {
//       messageData: [
//          {id: 1, message: `текст`},
//          {id: 2, message: `еще текст`},
//          {id: 2, message: `еще текст`},
//          {id: 2, message: `еще текст`},
//          {id: 2, message: `еще текст`},
//          {id: 3, message: `типичная запись`},
//          {id: 4, message: `типичная запись`},
//          {id: 5, message: `типичная запись`},
//          {id: 6, message: `типичная запись`},
//       ],
//       dialogData: [
//          {id: 1, name: `света`},
//          {id: 2, name: `дима`},
//          {id: 3, name: `катя`},
//          {id: 4, name: `аня`},
//          {id: 5, name: `володя`},
//          {id: 6, name: `павлуша`},
//       ],
//
//    },
// }
//
// export let testpostData: [
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 1, message: `hello`, likeCount: 22 },
//    { id: 2, message: `шо как`, likeCount: 11 },
//    { id: 2, message: `шо как`, likeCount: 11 },
//    { id: 2, message: `шо как`, likeCount: 11 },
//    { id: 3, message: `чо кого ? `, likeCount: 12 },
//    { id: 3, message: `чо кого ? `, likeCount: 12 },
// ]

//
// export const addPost = () => {
//    let newPost = {id: 13, message: state.profilepage.newPostText, likeCount: 12}
//    state.profilepage.postData.push(newPost)
//    state.profilepage.newPostText = ''
//    rerenderEntireTree(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//    state.profilepage.newPostText = newText
//    rerenderEntireTree(state)
// }
// let rerenderEntireTree: (State: StatePropsType) => void = () => {
//
// }
//
//
// export const subscribe = (observer: (State: StatePropsType) => void) => {
//    rerenderEntireTree = observer
// }
//
// export default state

export default store;
