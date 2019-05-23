import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from "../store/actions/recipesActions";
import { connect } from 'react-redux'

const SignedInLinks = (props) => {

    return (
      <div>
        <ul className="right">
          <li><NavLink to='/recipeForm'>New Recipe</NavLink></li>
          <li><NavLink to='/recipes/recipe-list'>Recipes</NavLink></li>
          <li><NavLink to='/login' onClick={props.signOut}>Log Out</NavLink></li>
        </ul>
      </div>
    )
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(logOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInLinks)