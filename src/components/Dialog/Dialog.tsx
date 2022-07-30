import React, {ChangeEvent} from "react";
import classes from "./Dialog.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogDataType, messageDataType} from "../../App";
import {ActionType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type propsTypeProps = {
   state: {
      dialogData: Array<dialogDataType>
      messageData: Array<messageDataType>
      newMessageBod: string
   }
   dispatch: (action: ActionType) => void
}

export function Dialogs(props: propsTypeProps) {


   let dialogsElemens = props.state.dialogData.map((dialog) => {
      return <DialogItem id={dialog.id} name={dialog.name}/>
   })

   let messageElements = props.state.messageData.map((message) => {
      return <Message message={message.message} id={message.id}/>
   })

   let onSendMessageClick = () => {
      props.dispatch(sendMessageAC())
   }
   let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let body = event.currentTarget.value
      props.dispatch(updateNewMessageBodyAC(body))
   }

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
                   value={props.state.newMessageBod}
                   placeholder='Ener uour message'></textarea></div>
              <div>
                 <button onClick={onSendMessageClick}>X</button>
              </div>
           </div>
        </div>
     </div>
   )
}

