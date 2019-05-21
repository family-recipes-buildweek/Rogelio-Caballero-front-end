import React from 'react';
import RecipeSummary from './RecipeSummary'
import {Link} from 'react-router-dom'




const RecipeContainer=props=>{

    // function routeToItem(ev, recipe) {
    //     ev.preventDefault();
    //     props.history.push(`/recipe-list/${recipe.id}`);
    //   }
   
    return (
        <div>
            {props.recipes.map(recipe=>{
                return (
                    // <div onClick={ev=>routeToItem(ev,recipe)} key={recipe.id}>
                    <Link to={`/recipes/recipe-list/${recipe.id}`}>
                    
                    <RecipeSummary recipe={recipe} id={recipe.id}/>
                     </Link>
                    // </div>
                )
            })}
        </div>
    )
}
export default RecipeContainer;


