import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialog} from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";


function App() {
   return (
     <BrowserRouter>
        <div className="app-wrapper">
           <Header/>
           <Navbar/>


           <div className="app-wrapper-content">
              <Route path="/profile" component={Profile}/>
              <Route path="/dialogs" component={Dialog}/>
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/setting" component={Setting}/>
           </div>

        </div>
     </BrowserRouter>
   );
}

export default App;
