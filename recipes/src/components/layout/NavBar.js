import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar =(props)=>{
return(
  
  <nav className="nav-wrapper blue lighten-3 hoverable">
  <div className="container">
    <Link className="brand-logo left ">Secret-Recipes</Link>
    
    {props.loggedIn?<SignedInLinks/>:<SignedOutLinks/>}

  </div>
</nav>
)

}
const mapStateToProps = (state) => {
 
  return{
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(NavBar)
