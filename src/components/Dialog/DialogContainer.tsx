import React from "react";
import {dialogDataType, messageDataType, StatePropsType} from "../../App";
import {dialogReducerType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialog";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type propsTypeProps = {
   store: StatePropsType
}

type MapStatePropsType = {
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
      dialogData: state.dialogsPage.dialogData,
      messageData: state.dialogsPage.messageData,
      newMessageBod: state.dialogsPage.newMessageBod,
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


export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)

