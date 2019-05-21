import React from "react"
import { connect } from "react-redux";
import { login } from "../store/actions/recipesActions";

class Login extends React.Component{
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
        [e.target.id]: e.target.value
      }
      
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(()=>this.props.history.push('/'))
  }

render(){

return (
    <form onSubmit={this.handleSubmit}>
    <div class="input-field col s6 ">
          <input id="icon_prefix1" name='username' onChange={this.handleChange} type="text" class="validate"/>
          <label for="icon_prefix1">username</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix2" name='password' onChange={this.handleChange} type="text" class="validate"/>
          <label for="icon_prefix2">password</label>
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
  { login }
)(Login);