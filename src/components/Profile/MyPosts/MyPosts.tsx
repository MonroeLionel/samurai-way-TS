import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div>
            <div>посты</div>
            <div>новые посты</div>
            <div className="post">
                <Post message={`hello`} likeCount={22}/>
                <Post message={`шо как `} likeCount={4}/>


            </div>
        </div>
    )
}