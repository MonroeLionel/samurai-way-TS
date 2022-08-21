import React from "react";
import css from "./users.module.css";
import userGIF from "../../assets/images/user.gif";
import axios from "axios";
import {UsersStatePropsType} from "./UsersContainer";

class Users extends React.Component<UsersStatePropsType> {
   // constructor(props: UsersStatePropsType) {
   //    super(props);
   //
   //
   // }

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setUsers(response.data.items)
      })

   }

   render() {
      return (
        <div>
           {this.props.users.map(el => <div key={el.id}>
<span>
   <div>
      <img className={css.userPhoto}
           src={el.photos.small != null ? el.photos.small : userGIF}/>
   </div>
   <div>
      {el.followed ?
        <button onClick={() => {
           this.props.unFollow(el.id)
        }}>Follow</button>
        : <button onClick={() => {
           this.props.follow(el.id)
        }}>Unfoolow</button>}

   </div>
</span>
              <span>
              <span>
                 <div></div>
                 <div></div>
              </span>
              <span>
                 <div>{el.name}</div>  <div>{el.status}</div>

              </span>
              <span>
                 <div>{"el.location.country"}</div>
                 <div>{"el.location.city"}</div>
              </span>
           </span>
           </div>)}
        </div>
      )
   }
}

export default Users