import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App, {dialogDataType, messageDataType, postDataType, profileType} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


export type StatePropsType = {

   profilepage: {
      postData: Array<postDataType>
      newPostText: string
      profile: profileType | null
   },
   dialogsPage: {
      messageData: Array<messageDataType>
      dialogData: Array<dialogDataType>
      newMessageBod: string
   },

}


ReactDOM.render(
  <BrowserRouter>
     <Provider store={store}>

        <App
          State={store.getState()}
          dispatch={store.dispatch.bind(store)}
          // addPost={store.addPost.bind(store)}
          // updateNewPostText={store.updateNewPostText.bind(store)}
        />
     </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);