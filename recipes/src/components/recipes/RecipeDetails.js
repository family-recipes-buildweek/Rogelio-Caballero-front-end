import React from 'react'




const RecipeDetails=(props)=>{
    
    const recipe=props.recipes.find(
        thing=>`${thing.id}`===props.match.params.id
    )
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
    
