import React from "react";
import classes from "./Profileinfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {profileType} from "../../../App";
import ProfileStatus from "./ProfileStatus";


type propsTypeProps1 = {
   profile: profileType | null
   status: string | null
   updateStatus: (status: string) => void
}


export function Profileinfo(props: propsTypeProps1) {
   if (!props.profile) {
      return <Preloader/>
   }
   console.log(props)
   return (
     <div className={classes.content}>
        {/* <img*/}
        {/*src="https://img2.akspic.ru/crops/8/5/6/8/6/168658/168658-fraktalnoe_iskusstvo-art-risovanie-purpur-naturalnyj_material-3840x2160.jpg"*/}
        {/*alt=""/>*/}
        <div className={classes.descriptionBloc}>
           <img src={props.profile.photos.large}/>
           <ProfileStatus  {...props} status={props.status}/>
        </div>


     </div>
   )
}