import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatusTC, getUserProfile, setUserProfile, updateStatusTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../App";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
   userId: string
}
type MapStatePropsType = {
   profile: profileType | null
   status: string | null

}
type MapDispatchPropsTpe = {
   // setUserProfile: (profile: profileType) => void
   getUserProfile: (userId: string) => void
   getStatusTC: (userId: string) => void
   updateStatusTC: (status: string) => void
}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

type PropsType = RouteComponentProps<PathParamsType> & UsersStatePropsType

class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      console.log(this.props)
      let userId = this.props.match.params.userId
      this.props.getUserProfile(userId)
      this.props.getStatusTC(userId)
   }

   render() {


      return (
        <Profile {...this.props} updateStatusTC={this.props.updateStatusTC} profile={this.props.profile}
                 status={this.props.status}/>
      )
   }

}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   profile: state.profilepage.profile,
   status: state.profilepage.status

})


export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getStatusTC, updateStatusTC}),
  withRouter,
  //withAuthRedirect,
)(ProfileContainer)