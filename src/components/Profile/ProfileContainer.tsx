import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../App";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


type PathParamsType = {
   userId: string
}
type MapStatePropsType = {
   profile: profileType | null
   isAuth: boolean | null
}
type MapDispatchPropsTpe = {
   // setUserProfile: (profile: profileType) => void
   getUserProfile: (userId: string) => void
}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

type PropsType = RouteComponentProps<PathParamsType> & UsersStatePropsType

class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId
      this.props.getUserProfile(userId)

   }

   render() {
      if (!this.props.isAuth) return <Redirect to={"/login"}/>

      return (
        <Profile {...this.props} profile={this.props.profile}/>
      )
   }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   profile: state.profilepage.profile,
   isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)