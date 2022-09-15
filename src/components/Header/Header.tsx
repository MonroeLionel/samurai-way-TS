import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

type propsType = {
   isAuth: boolean | null
   login: string | null
}


export function Header(props: propsType) {
   return (
     <header className={classes.header}>
        <img
          src="https://thumbs.dreamstime.com/b/phoenix-bird-fire-vector-colorful-icon-abstract-logo-design-bright-gradient-colors-89986014.jpg"
          alt=""/>
        <div className={classes.loginBlock}>
           {props.isAuth ? props.login
             : <NavLink to={'/login'}>login</NavLink>
           }


        </div>
     </header>
   )
}