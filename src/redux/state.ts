import {StatePropsType} from "../index";


let state = {
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
}

export let testpostData: [
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 1, message: `hello`, likeCount: 22 },
   { id: 2, message: `шо как`, likeCount: 11 },
   { id: 2, message: `шо как`, likeCount: 11 },
   { id: 2, message: `шо как`, likeCount: 11 },
   { id: 3, message: `чо кого ? `, likeCount: 12 },
   { id: 3, message: `чо кого ? `, likeCount: 12 },
]


export const addPost = () => {
   let newPost = {id: 13, message: state.profilepage.newPostText, likeCount: 12}
   state.profilepage.postData.push(newPost)
   state.profilepage.newPostText = ''
   rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
   state.profilepage.newPostText = newText
   rerenderEntireTree(state)
}
let rerenderEntireTree: (State: StatePropsType) => void = () => {

}


export const subscribe = (observer: (State: StatePropsType) => void) => {
   rerenderEntireTree = observer
}

export default state
