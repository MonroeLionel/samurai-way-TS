import React from "react";
import {UsersStatePropsType} from "./UsersContainer";
import css from "./users.module.css";


export function Users(props: UsersStatePropsType) {
   if (props.users.length === 0) {
      props.setUsers([

         {
            id: 1,
            photoUrl: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-72.gif",
            followed: false,
            fullName: `Dmitry`,
            status: "i am a boss",
            location: {city: "Minsk", country: "Belarus"}
         },
         {
            id: 2,
            photoUrl: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-13.gif",
            followed: true,
            fullName: `Sasha`,
            status: "i am a boss",
            location: {city: "Moskov", country: "Russia"}
         },
         {
            id: 3,
            photoUrl: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-6.gif",
            followed: false,
            fullName: `Andre`,
            status: "i am a boss",
            location: {city: "Kiev", country: "Ukraine"}
         },
         {
            id: 3,
            photoUrl: "https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-anime-avatars-gif-discord-24.gif",
            followed: true,
            fullName: `Alex`,
            status: "i am a boss",
            location: {city: "Kiev", country: "Ukraine"}
         },
      ])
   }
   return (
     <div>
        {props.users.map(el => <div key={el.id}>
<span>
   <div>
      <img className={css.userPhoto} src={el.photoUrl}/>
   </div>
   <div>
      {el.followed ?
        <button onClick={() => {
           props.unFollow(el.id)
        }}>Follow</button>
        : <button onClick={() => {
           props.follow(el.id)
        }}>Unfoolow</button>}

   </div>
</span>
           <span>
              <span>
                 <div></div>
                 <div></div>
              </span>
              <span>
                 <div>{el.fullName}</div>  <div>{el.status}</div>

              </span>
              <span>
                 <div>{el.location.country}</div>
                 <div>{el.location.city}</div>
              </span>
           </span>
        </div>)}
     </div>
   )
}