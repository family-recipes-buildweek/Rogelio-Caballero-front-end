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
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }

render(){

return (
    <form>
    <div class="input-field col s6">
          <input id="icon_prefix1" type="text" class="validate"/>
          <label for="icon_prefix1">username</label>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix2" type="text" class="validate"/>
          <label for="icon_prefix2">password</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
       
  </button>
        

        



    </form>
   

)
}
}
export default Login;