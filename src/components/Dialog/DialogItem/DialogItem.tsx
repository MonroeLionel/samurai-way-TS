import React from "react";
import classes from "./../Dialog.module.css"
import {NavLink} from "react-router-dom";


type DialogItemType = {
   name: string
   id: number
}

export function DialogItem(props: DialogItemType) {
   return (
     <div className={classes.dialog}>
        <NavLink
          to={"/dialogs/" + props.id}
          activeClassName={classes.active}>{props.name}
        </NavLink>
     </div>
   )
}
