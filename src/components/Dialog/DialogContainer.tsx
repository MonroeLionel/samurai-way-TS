import React from "react";
import {dialogDataType, messageDataType, StatePropsType} from "../../App";
import {dialogReducerType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setUsersAC, userReducerType} from "../../redux/users-reducer";


type propsTypeProps = {

   store: StatePropsType
}

// export function DialogsContainer(props: propsTypeProps) {
//
//
//    let onSendMessageClick = () => {
//       props.store.dispatch(sendMessageAC())
//    }
//    let onNewMessageChange = (body: string) => {
//       props.store.dispatch(updateNewMessageBodyAC(body))
//    }
//
//    return (
//      <Dialogs
//        updateNewMessageBody={onNewMessageChange}
//        sendMessage={onSendMessageClick}
//        dialogData={props.store.State.dialogsPage.dialogData}
//        messageData={props.store.State.dialogsPage.messageData}
//        newMessageBod={props.store.State.dialogsPage.newMessageBod}
//      />
//    )
// }


type MapStatePropsType = {
   // inicialStae: dialogReducerType
   dialogData: Array<dialogDataType>
   messageData: Array<messageDataType>
   newMessageBod: string
}

type MapDispatchPropsTpe = {
   updateNewMessageBody: (body: string) => void
   sendMessage: () => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsTpe

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      // inicialStae: state.dialogsPage,
      dialogData: state.dialogsPage.dialogData,
      messageData: state.dialogsPage.messageData,
      newMessageBod: state.dialogsPage.newMessageBod
   }

}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsTpe => {
   return {
      updateNewMessageBody: (body: string) => {
         dispatch(updateNewMessageBodyAC(body))

      },
      sendMessage: () => {
         dispatch(sendMessageAC())

      }
   }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);