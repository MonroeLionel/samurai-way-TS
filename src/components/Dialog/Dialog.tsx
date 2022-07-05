import React from "react";
import classes from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
   name: string
   id: number
}
type MessageType = {
   message: string
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

   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           <DialogItem id={1} name="Света"/>
           <DialogItem id={2} name="дима"/>
           <DialogItem id={3} name="катя"/>
           <DialogItem id={4} name="аня"/>
           <DialogItem id={5} name="володя"/>
           <DialogItem id={6} name="павлуша"/>

        </div>
        <div className={classes.messages}>
           <Message message={`текст`}/>
           <Message message={`еще текст`}/>
           <Message message={`типичная запись`}/>
           <Message message={`типичная запись`}/>
           <Message message={`типичная запись`}/>
           <Message message={`типичная запись`}/>
        </div>
     </div>
   )
}

