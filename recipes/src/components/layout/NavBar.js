import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar =(props)=>{
return(
  <nav className="nav-wrapper blue lighten-3 hoverable">
  <div className="container">
    <Link to='/'  className="brand-logo">Secret-Recipes</Link>
    <SignedInLinks/>
    <SignedOutLinks/>
    
  </div>
</nav>
)

}
export default NavBar;
