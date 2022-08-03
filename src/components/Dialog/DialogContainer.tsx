import React from "react";
import {StatePropsType} from "../../App";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialog";


type propsTypeProps = {

   store: StatePropsType
}

export function DialogsContainer(props: propsTypeProps) {


   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageAC())
   }
   let onNewMessageChange = (body: string) => {
      props.store.dispatch(updateNewMessageBodyAC(body))
   }

   return (
     <Dialogs
       updateNewMessageBody={onNewMessageChange}
       sendMessage={onSendMessageClick}
       dialogData={props.store.State.dialogsPage.dialogData}
       messageData={props.store.State.dialogsPage.messageData}
       newMessageBod={props.store.State.dialogsPage.newMessageBod}
     />
   )
}

