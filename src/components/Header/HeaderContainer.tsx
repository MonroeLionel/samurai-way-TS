import React from "react";
import classes from "./Header.module.css"
import {NavLink, RouteComponentProps} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
   isAuth: boolean | null
   login: string | null
}
type MapDispatchPropsTpe = {
   setAuthUserDataAC: (id: number, email: string, login: string) => void
}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe


class HeaderContainer extends React.Component<UsersStatePropsType> {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true
      })
        .then(response => {
           if (response.data.resultCode === 0) {
              let {id, email, login} = response.data.data
              this.props.setAuthUserDataAC(id, email, login)
           }
        })
   }


   render() {
      return (
        <Header {...this.props}/>
      )
   }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login

})
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)