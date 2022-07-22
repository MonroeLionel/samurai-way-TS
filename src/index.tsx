import React from 'react';
import './index.css';
import state, {subscribe} from './redux/state'

import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogDataType, messageDataType, postDataType} from './App';
import {addPost, updateNewPostText} from './redux/state'


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
     <App State={State} addPost={addPost} updateNewPostText={updateNewPostText}/>,
     document.getElementById('root')
   );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);