import React from "react";
import classes from "./Profileinfo.module.css"


export function Profileinfo() {
   return (
     <div className={classes.content}><img
       src="https://img2.akspic.ru/crops/8/5/6/8/6/168658/168658-fraktalnoe_iskusstvo-art-risovanie-purpur-naturalnyj_material-3840x2160.jpg"
       alt=""/>
        <div className={classes.descriptionBloc}>ава+описание</div>


     </div>
   )
}