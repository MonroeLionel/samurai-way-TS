import React, {ChangeEvent} from "react";

type propsType = {
   status: string | null
   updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<propsType> {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      console.log(this)
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      if (this.state.status) {
         this.props.updateStatus(this.state.status)
      }

   }
   onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{}>, snapshot?: any) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      let status = "Hello"
      return (<>
         {!this.state.editMode &&
             <div>
                 <span onDoubleClick={this.activateEditMode}>{this.props.status || "_____"}</span>
             </div>}
         {this.state.editMode &&
             <div>
                 <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                        value={this.state.status || ""}></input>
             </div>}
      </>)
   }


}

export default ProfileStatus