import React from "react";
import classes from "./Header.module.css"
import {NavLink, RouteComponentProps} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


type MapStatePropsType = {
   isAuth: boolean | null
   login: string | null
}
type MapDispatchPropsTpe = {
   getAuthUserData: () => void
}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe


class HeaderContainer extends React.Component<UsersStatePropsType> {
   componentDidMount() {
      this.props.getAuthUserData()

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
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)