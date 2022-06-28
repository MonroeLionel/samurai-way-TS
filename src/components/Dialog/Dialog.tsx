import React from "react";
import classes from "./Dialog.module.css"


export function Dialog() {
   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           <div className={classes.dialog + ' ' + classes.active}>света</div>
           <div className={classes.dialog}>дима</div>
           <div className={classes.dialog}>антоша</div>
           <div className={classes.dialog}>катюша</div>
           <div className={classes.dialog}>павлуша</div>
           <div className={classes.dialog}>андрюша</div>
        </div>
        <div className={classes.messages}>
           <div className={classes.message}>текст</div>
           <div className={classes.message}>еще текст</div>
           <div className={classes.message}>типичная запись</div>
        </div>
     </div>
   )
}

