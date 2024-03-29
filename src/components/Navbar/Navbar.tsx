import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export function Navbar() {
   return (
     <nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink></div>
        <div className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
        <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
        <div className={classes.item}><NavLink to="/setting" activeClassName={classes.active}>Setting</NavLink></div>
        <div className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>

     </nav>
   )
}