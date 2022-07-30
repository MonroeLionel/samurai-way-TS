import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {ActionType} from "./redux/state";


export type dialogDataType = {
   id: number
   name: string
}
export type messageDataType = {
   id: number
   message: string
}
export type postDataType = {
   id: number
   message: string
   likeCount: number
}

type StatePropsType = {
   State: {
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
   // addPost: () => void
   // updateNewPostText: (newText: string) => void
   dispatch: (action: ActionType) => void
}


function App(props: StatePropsType) {

   return (

     <div className="app-wrapper">
        <Header/>
        <Navbar/>


        <div className="app-wrapper-content">
           {/*<Route path="/profile" component={Profile}/>*/}
           <Route path="/profile"
                  render={() => <Profile
                    profilepage={props.State.profilepage}
                    // addPost={props.addPost}
                    // updateNewPostText={props.updateNewPostText}
                    dispatch={props.dispatch}
                  />}
           />


           <Route path="/dialogs"
                  render={() => <Dialogs
                    dispatch={props.dispatch}
                    state={props.State.dialogsPage}
                  />}/>
           <Route path="/news" render={() => <News/>}/>
           <Route path="/music" render={() => <Music/>}/>
           <Route path="/setting" render={() => <Setting/>}/>
        </div>

     </div>

   );
}

export default App;
