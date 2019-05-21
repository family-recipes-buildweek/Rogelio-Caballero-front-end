import React from 'react'




function RecipeDetails(props) {
    
    // const recipe=props.recipes.find(
    //     recipe=>(`${recipe.id}`=== props.match.params.id)
    // );

    let id =props.match.params.id;
    let recipe=props.recipes.find(recipe=>recipe.id==Number(id))
        return (
            <div>
            <p>{recipe.title}</p>
            <p>{recipe.img}</p>
            <p>{recipe.category}</p>
            <p>{recipe.nameOfSource}</p>
            <p>{recipe.Ingredients}</p>
            <p>{recipe.Instructions}</p> 
            </div>
        )
        
    }


    export default RecipeDetails;
    
