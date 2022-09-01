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
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })

   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render() {

      let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = []

      for (let i = 1; i <= pageCount; i++) {
         pages.push(i)
      }

      return (
        <div>
           <div>
              {pages.map(p => {
                 return <span
                   className={this.props.currentPage === p ? css.selectedPage : ""}
                   onClick={() => {
                      this.onPageChanged(p)
                   }}
                 >{p}</span>
              })}


           </div>
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