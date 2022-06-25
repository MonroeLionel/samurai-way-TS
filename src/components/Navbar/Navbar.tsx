import React from "react";
import classes from "./Navbar.module.css";

export function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>profile</a></div>
            <div className="item"><a href="src/components/Navbar/Navbar">message</a></div>
            <div className="item"><a href="src/components/Navbar/Navbar">news</a></div>
            <div className="item"><a href="src/components/Navbar/Navbar">music</a></div>
            <div className="item"><a href="src/components/Navbar/Navbar">setting</a></div>

        </nav>
    )
}