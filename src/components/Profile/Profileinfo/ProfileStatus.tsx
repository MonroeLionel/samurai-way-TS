import React from "react";

class ProfileStatus extends React.Component {

   state = {
      editMode: false
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
   }

   render() {
      let status = "Hello"
      return (<>
         {!this.state.editMode &&
             <div>
                 <span onDoubleClick={this.activateEditMode}>{status}</span>
             </div>}
         {this.state.editMode &&
             <div>
                 <input autoFocus={true} onBlur={this.deactivateEditMode} value={status}></input>
             </div>}
      </>)
   }


}

export default ProfileStatus