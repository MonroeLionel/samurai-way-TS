import React from "react";
import classes from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
   name: string
   id: number
}
type MessageType = {
   message: string
   id: number
}
const DialogItem = (props: DialogItemType) => {
   return (
     <div className={classes.dialog}>
        <NavLink
          to={"/dialogs/" + props.id}
          activeClassName={classes.active}>{props.name}
        </NavLink>
     </div>
   )
}
const Message = (props: MessageType) => {
   return (
     <div className={classes.message}>{props.message}</div>

   )
}

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
   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
           <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>

        </div>
        <div className={classes.messages}>
           <Message message={messageData[0].message} id={messageData[0].id}/>
           <Message message={messageData[1].message} id={messageData[1].id}/>

        </div>
     </div>
   )
}

