import React from 'react'




function RecipeDetails(props) {
    

    const recipe=props.recipes.find(
        recipe=>`${recipe.id}`=== props.match.params.id
    );

        return (
            <div>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            
            <i
                class="fas fa-times"
                // onClick={}
              />
              <p>delete recipe</p>
            </div>
        )
        
    }


    export default RecipeDetails;
    
