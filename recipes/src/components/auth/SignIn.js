import React from "react"


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
    this.props.signIn(this.state.credentials)
    .then(()=>this.props.history.push('/protected'))
  }

render(){

return (
    <form>
    <div class="input-field col s6">
          <input id="icon_prefix1" name='username' onChange={this.handleChange} type="text" class="validate"/>
          <label for="icon_prefix1">username</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix2" name='password' onChange={this.handleChange} type="text" class="validate"/>
          <label for="icon_prefix2">password</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
       
  </button>
        

        



    </form>
   

)
}
}
export default Login;