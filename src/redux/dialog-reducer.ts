import {dialogDataType, messageDataType} from "../App";
import {ActionType} from "./store";

export type dialogReducerType = {
   messageData: Array<messageDataType>
   dialogData: Array<dialogDataType>
   newMessageBod: string
}

let inicialStae: dialogReducerType = {
   messageData: [
      {id: 1, message: `текст`},
      {id: 2, message: `еще текст`},
      {id: 2, message: `еще текст`},
      {id: 2, message: `еще текст`},
      {id: 2, message: `еще текст`},
      {id: 3, message: `типичная запись`},
      {id: 4, message: `типичная запись`},
      {id: 5, message: `типичная запись`},
      {id: 6, message: `типичная запись`},
   ],
   dialogData: [
      {id: 1, name: `света`},
      {id: 2, name: `дима`},
      {id: 3, name: `катя`},
      {id: 4, name: `аня`},
      {id: 5, name: `володя`},
      {id: 6, name: `павлуша`},
   ],
   newMessageBod: "",
}

const dialogReducer = (state = inicialStae, action: ActionType): dialogReducerType => {
   switch (action.type) {
      case "UPDATE-NEW-MESSAGE-BODY": {
         let stateCopy = {...state}
         stateCopy.newMessageBod = action.body
         return stateCopy
      }
      case "SEND-MESSAGE": {
         let stateCopy = {...state}
         let body = stateCopy.newMessageBod
         stateCopy.newMessageBod = ''
         stateCopy.messageData = [...state.messageData]
         stateCopy.messageData.push({id: 99, message: body})
         return stateCopy
      }
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