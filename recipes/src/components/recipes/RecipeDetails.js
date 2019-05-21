import React from 'react'




function RecipeDetails(props) {
    
    const recipe=props.recipes.find(
        recipe=>`${recipe.id}`=== props.match.params.id
    );

        return (
            <div>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            </div>
        )
        
    }


    export default RecipeDetails;
    
