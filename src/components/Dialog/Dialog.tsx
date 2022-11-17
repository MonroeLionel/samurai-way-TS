import React, {ChangeEvent} from "react";
import classes from "./Dialog.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogDataType, messageDataType,} from "../../App";
import {DialogPropsType} from "./DialogContainer";
import {Redirect} from "react-router-dom";


type propsTypeProps = {
   updateNewMessageBody: (body: string) => void
   sendMessage: () => void
   dialogData: Array<dialogDataType>
   messageData: Array<messageDataType>
   newMessageBod: string
   isAuth: boolean | null
}

export function Dialogs(props: DialogPropsType) {

   let dialogsElemens = props.dialogData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
   })

   let messageElements = props.messageData.map((message) => {
      return <Message message={message.message} id={message.id}/>
   })


   let onSendMessageClick = () => {
      props.sendMessage()
   }
   let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let body = event.currentTarget.value
      props.updateNewMessageBody(body)
   }
   if (!props.isAuth) return <Redirect to={"/login"}/>
   return (
     <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
           {dialogsElemens}
        </div>
        <div className={classes.messages}>
           <div> {messageElements}</div>
           <div>
              <div>

                 <textarea
                   onChange={onNewMessageChange}
                   value={props.newMessageBod}
                   placeholder='Ener uour message'></textarea></div>
              <div>
                 <button onClick={onSendMessageClick}>X</button>
              </div>
           </div>
        </div>
     </div>
   )
}

