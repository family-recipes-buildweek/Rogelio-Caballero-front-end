import React from 'react'
// import { Link } from 'react-router-dom'


const NavBar =(props)=>{
return(
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Secret-Family-Recipes</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Login</a></li>
        <li><a href="badges.html">Sign Up</a></li>
        <li><a href="collapsible.html"></a></li>
      </ul>
    </div>
  </nav>
)

}
export default NavBar;
