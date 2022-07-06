import React from "react";
import classes from "./../Dialog.module.css"

type MessageType = {
   message: string
   id: number
}


export function Message(props: MessageType) {
   return (
     <div className={classes.message}>{props.message}</div>

   )
}
