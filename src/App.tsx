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

type propsTypeProps = {
   dialogData: Array<dialogDataType>
   messageData: Array<messageDataType>
   postData: Array<postDataType>
}
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

function App(props: propsTypeProps) {
   return (
     <BrowserRouter>
        <div className="app-wrapper">
           <Header/>
           <Navbar/>


           <div className="app-wrapper-content">
              {/*<Route path="/profile" component={Profile}/>*/}
              <Route path="/profile" render={() => <Profile postData={props.postData}/>}/>


              <Route path="/dialogs"
                     render={() => <Dialogs messageData={props.messageData} dialogData={props.dialogData}/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/setting" render={() => <Setting/>}/>
           </div>

        </div>
     </BrowserRouter>
   );
}

export default App;
