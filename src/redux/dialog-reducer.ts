import {dialogDataType, messageDataType} from "../App";
import {ActionType} from "./state";

type dialogReducerType = {
   messageData: Array<messageDataType>
   dialogData: Array<dialogDataType>
   newMessageBod: string
}


const dialogReducer = (state: dialogReducerType, action: ActionType) => {
   switch (action.type) {
      case "UPDATE-NEW-MESSAGE-BODY":
         state.newMessageBod = action.body
         return state
      case "SEND-MESSAGE":
         let body = state.newMessageBod
         state.newMessageBod = ''
         state.messageData.push({id: 99, message: body})
         return state
      default:
         return state
   }
}

export const updateNewMessageBodyAC = (body: string): updateNewMessageBodyAC => {
   return {
      type: "UPDATE-NEW-MESSAGE-BODY",
      body: body
   }
}
export const sendMessageAC = (): sendMessageACType => {
   return {
      type: "SEND-MESSAGE"
   }
}
export type sendMessageACType = {
   type: "SEND-MESSAGE"

}
export type updateNewMessageBodyAC = {
   type: "UPDATE-NEW-MESSAGE-BODY"
   body: string
}


export default dialogReducer;