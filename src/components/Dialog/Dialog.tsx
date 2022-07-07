import React from "react";
import classes from "./Dialog.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogDataType, messageDataType} from "../../App";

type propsTypeProps = {
   dialogData: Array<dialogDataType>
   messageData: Array<messageDataType>
}

export function Dialogs(props: propsTypeProps) {


   let dialogsElemens = props.dialogData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
   })

   let messageElements = props.messageData.map((message) => {
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

