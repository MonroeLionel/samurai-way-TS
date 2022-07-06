import React from "react";
import classes from "./Dialog.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export function Dialogs() {
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
      {id: 3, message: `типичная запись`},
      {id: 4, message: `типичная запись`},
      {id: 5, message: `типичная запись`},
      {id: 6, message: `типичная запись`},
   ]

   let dialogsElemens = dialogData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
   })

   let messageElements = messageData.map((message) => {
      return <Message message={message.message} id={message.id}/>
   })


   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           {dialogsElemens}
        </div>
        <div className={classes.messages}>
           {messageElements}
        </div>
     </div>
   )
}

