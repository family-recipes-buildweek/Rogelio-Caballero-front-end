import React from "react"
import { signUp } from "../store/actions/recipesActions";
import { connect } from "react-redux";

class SignUp extends React.Component{
constructor(){
    super();
    this.state={
        credentials:{
            username:'',
            password:'',

        }
    }
}

handleChange = (e) => {
    this.setState({
      credentials:{
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state.credentials)
    .then(()=>this.props.history.push('/login'))
  }


render(){

return (

    <form onSubmit={this.handleSubmit}>

    <h2>SIGN UP BEFORE SOMEONE STEALS YOURS RECIPES</h2>
        <div class="input-field col s6">
          <input id="icon_prefix7" type="text" name="username" onChange={this.handleChange} class="validate"/>
          <label for="icon_prefix7">username</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix8" type="text" name="password" onChange={this.handleChange} class="validate"/>
          <label for="icon_prefix8">password</label>
        </div>

        <button class="btn waves-effect waves-light deep-orange darken-3" type="submit" name="action">Register
       
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