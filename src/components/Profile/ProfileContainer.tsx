import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {profileType} from "../../App";


type MapStatePropsType = {
   profile: profileType | null
}


type MapDispatchPropsTpe = {
   setUserProfile: (profile: profileType) => void

}

type UsersStatePropsType = MapStatePropsType & MapDispatchPropsTpe


class ProfileContainer extends React.Component<UsersStatePropsType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType) => ({
   profile: state.profilepage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)