import React from 'react';
import './index.css';
import store from './redux/state'

import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogDataType, messageDataType, postDataType} from './App';


export type StatePropsType = {

   profilepage: {
      postData: Array<postDataType>
      newPostText: string
   },
   dialogsPage: {
      messageData: Array<messageDataType>
      dialogData: Array<dialogDataType>
   },

}

const rerenderEntireTree = (State: StatePropsType) => {


   ReactDOM.render(
     <App
       State={store.getState()}
       addPost={store.addPost.bind(store)}
       updateNewPostText={store.updateNewPostText.bind(store)}
     />,
     document.getElementById('root')
   );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);