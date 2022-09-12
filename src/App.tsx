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
// import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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


export type profileType = {

   "aboutMe": string | null,
   "contacts": {
      "facebook": string | null,
      "website": string | null,
      "vk": string | null,
      "twitter": string | null,
      "instagram": string | null,
      "youtube": string | null,
      "github": string | null,
      "mainLink": string | null
   },
   "lookingForAJob": boolean,
   "lookingForAJobDescription": string | null,
   "fullName": string | null,
   "userId": number,
   "photos": {
      "small": string,
      "large": string
   }
}


export type StatePropsType = {
   State: {
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

   dispatch: (action: ActionType) => void
}


function App(props: StatePropsType) {

   return (

     <div className="app-wrapper">
        <Header/>
        <Navbar/>


        <div className="app-wrapper-content">
           {/*<Route path="/profile" component={Profile}/>*/}
           <Route path="/profile/:userId?"
                  render={() =>
                    <ProfileContainer/>}
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
