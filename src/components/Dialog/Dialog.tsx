import React from "react";
import classes from "./Dialog.module.css"
import {NavLink} from "react-router-dom";


export function Dialog() {
   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           <div className={classes.dialog}><NavLink to="/dialogs/1" activeClassName={classes.active}>света</NavLink>
           </div>
           <div className={classes.dialog}><NavLink to="/dialogs/2" activeClassName={classes.active}>дима</NavLink>
           </div>
           <div className={classes.dialog}><NavLink to="/dialogs/3" activeClassName={classes.active}>катя</NavLink>
           </div>
           <div className={classes.dialog}><NavLink to="/dialogs/4" activeClassName={classes.active}>аня</NavLink></div>
           <div className={classes.dialog}><NavLink to="/dialogs/5" activeClassName={classes.active}>володя</NavLink>
           </div>
           <div className={classes.dialog}><NavLink to="/dialogs/6" activeClassName={classes.active}>павлуша</NavLink>
           </div>
        </div>
        <div className={classes.messages}>
           <div className={classes.message}>текст</div>
           <div className={classes.message}>еще текст</div>
           <div className={classes.message}>типичная запись</div>
        </div>
     </div>
   )
}

