import React from 'react'
import { NavLink } from 'react-router-dom'



const SignedInLinks = (props) => {
    return (
      <div>
        <ul className="right">
          <li><NavLink to='/recipeForm'>New Recipe</NavLink></li>
          <li><NavLink to='/recipes/recipe-list'>Recipes</NavLink></li>
          <li><NavLink to='/Login'>Log Out</NavLink></li>
        </ul>
      </div>
    )
  }
  export default SignedInLinks;