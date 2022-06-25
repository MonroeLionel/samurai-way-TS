import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://thumbs.dreamstime.com/b/phoenix-bird-fire-vector-colorful-icon-abstract-logo-design-bright-gradient-colors-89986014.jpg"
                    alt=""/>
            </header>
            <nav className="nav">
                <div><a href="">profile</a></div>
                <div><a href="">message</a></div>
                <div><a href="">news</a></div>
                <div><a href="">music</a></div>
                <div><a href="">setting</a></div>

            </nav>
            <div className="content"><img
                src="https://img2.akspic.ru/crops/8/5/6/8/6/168658/168658-fraktalnoe_iskusstvo-art-risovanie-purpur-naturalnyj_material-3840x2160.jpg"
                alt=""/>
                <div>ава+описание</div>
                <div>посты</div>
                <div>новые посты</div>
                <div>пост1</div>
                <div>пост 1</div>
            </div>

        </div>
    );
}

export default App;
