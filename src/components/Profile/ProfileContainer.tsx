import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../App";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
   userId: string
}
type MapStatePropsType = {
   profile: profileType | null
}
type MapDispatchPropsTpe = {
   setUserProfile: (profile: profileType) => void
}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe

type PropsType = RouteComponentProps<PathParamsType> & UsersStatePropsType

class ProfileContainer extends React.Component<PropsType> {

   componentDidMount() {
      let userId = this.props.match.params.userId
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
        .then(response => {
           debugger
           this.props.setUserProfile(response.data)

        })
   }

   render() {

      return (
        <Profile {...this.props} profile={this.props.profile}/>
      )
   }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   profile: state.profilepage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)