import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsType = {
   isAuth: boolean | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      isAuth: state.auth.isAuth
   }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

   const RedirectComponent = (props: mapStateToPropsType) => {
      let {isAuth, ...restProps} = props

      if (!props.isAuth) return <Redirect to={"/login"}/>
      return <Component {...restProps as T}/>
   }
   let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
   return ConnectedRedirectComponent
}