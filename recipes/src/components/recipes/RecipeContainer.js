import React, { Component } from 'react';
import RecipeSummary from './RecipeSummary'
import {Link} from 'react-router-dom'

const RecipeContainer=props=>{

    return (
<div>
        {props.recipes.map(recipe=>{
            return (
                <Link to={`/recipes/${recipe.id}`}>
                <RecipeSummary recipe={recipe} id={recipe.id}/>
                </Link>
            )
        })}
</div>
    )
}
export default RecipeContainer;