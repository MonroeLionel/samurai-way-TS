import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

   return (
     <form onSubmit={props.handleSubmit} action="">
        <div>
           <Field name={"login"} component={"input"} placeholder={"Login"} type="text"/>
        </div>
        <div>
           <Field name={"password"} component={"input"} placeholder={"Password"} type="text"/>
        </div>
        <div>
           <Field name={"rememberMe"} component={"input"} placeholder={"Checkbox"} type="checkbox"/>
        </div>
        <div>
           <button>login</button>
        </div>
     </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)


const Login = () => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData)
   }

   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}
export default Login