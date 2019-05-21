import React from "react"
import { signUp } from "../store/actions/recipesActions";
import { connect } from "react-redux";

class SignUp extends React.Component{
constructor(){
    super();
    this.state={
        credentials:{
            email:'',
            username:'',
            password:'',

        }
    }
}

handleChange = (e) => {
    this.setState({
      credentials:{
        ...this.state.credentials,
        [e.target.id]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }


render(){

return (

    <form onSubmit={this.handleSubmit}>
    <div class="input-field col s6">
          <input id="icon_prefix1" type="text" name="email" onChange={this.handleChange} class="validate "/>
          <label for="icon_prefix1">email</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix7" type="text" name="username" onChange={this.handleChange} class="validate"/>
          <label for="icon_prefix7">username</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix8" type="text" name="password" onChange={this.handleChange} class="validate"/>
          <label for="icon_prefix8">password</label>
        </div>

        <button class="btn waves-effect waves-light deep-orange darken-3" type="submit" name="action">Submit
       
       </button>



    </form>
   

)
}
}
const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);