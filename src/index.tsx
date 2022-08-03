import React from 'react';
import './index.css';
// import store from './redux/store'
import store from './redux/redux-store'

import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogDataType, messageDataType, postDataType} from './App';
import {BrowserRouter} from "react-router-dom";


export type StatePropsType = {

   profilepage: {
      postData: Array<postDataType>
      newPostText: string
   },
   dialogsPage: {
      messageData: Array<messageDataType>
      dialogData: Array<dialogDataType>
      newMessageBod: string
   },

}

const rerenderEntireTree = () => {


   ReactDOM.render(
     <BrowserRouter>
        <App
          State={store.getState()}
          dispatch={store.dispatch.bind(store)}
          // addPost={store.addPost.bind(store)}
          // updateNewPostText={store.updateNewPostText.bind(store)}
        />
     </BrowserRouter>,
     document.getElementById('root')
   );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree);