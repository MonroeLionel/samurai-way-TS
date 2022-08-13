import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {ActionType} from "./redux/store";
import {DialogsContainer} from "./components/Dialog/DialogContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";


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

export type StatePropsType = {
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
                  render={() =>
                    <Profile
                      store={props}
                    />}
           />

           <Route path="/users" render={() => <UsersContainer/>}/>

           <Route path="/dialogs"
                  render={() =>

                    <DialogsContainer/>

                  }/>

           <Route path="/news" render={() => <News/>}/>
           <Route path="/music" render={() => <Music/>}/>
           <Route path="/setting" render={() => <Setting/>}/>
        </div>

     </div>

   );
}

export default App;
