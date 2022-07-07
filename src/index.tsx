import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogData = [
   {id: 1, name: `света`},
   {id: 2, name: `дима`},
   {id: 3, name: `катя`},
   {id: 4, name: `аня`},
   {id: 5, name: `володя`},
   {id: 6, name: `павлуша`},
]
let messageData = [
   {id: 1, message: `текст`},
   {id: 2, message: `еще текст`},
   {id: 2, message: `еще текст`},
   {id: 2, message: `еще текст`},
   {id: 2, message: `еще текст`},
   {id: 3, message: `типичная запись`},
   {id: 4, message: `типичная запись`},
   {id: 5, message: `типичная запись`},
   {id: 6, message: `типичная запись`},
]
let postData = [
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
]
ReactDOM.render(
  <App dialogData={dialogData} messageData={messageData} postData={postData}/>,
  document.getElementById('root')
);