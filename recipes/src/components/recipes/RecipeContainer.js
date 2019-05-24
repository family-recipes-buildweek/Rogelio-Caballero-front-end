import React from 'react';
import RecipeSummary from './RecipeSummary'
import {Link} from 'react-router-dom'




const RecipeContainer=props=>{


    const data = Array.from(props.recipes);
   
    return (
        <div className="recipeContainer">
            {data.map(recipe=>{
                return (
                  
                    <Link to={`/recipes/recipe-list/${recipe.id}`}>
                    
                    <RecipeSummary recipe={recipe} id={recipe.id}/>
                     </Link>
                  
                )
            })}
        </div>
    )
}
export default RecipeContainer;


