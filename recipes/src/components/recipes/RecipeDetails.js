import React from 'react'
import {Link} from 'react-router-dom'




function RecipeDetails(props) {
    

    const recipe=props.recipes.find(
        recipe=>`${recipe.id}`=== props.match.params.id
    );

        return (
        
            <div class="row">
            <h2>{recipe.title}</h2>
            <div class="col .s .m .l blue lighten-3 card-panel hoverable">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                
                <h4>Ingredients</h4>
                <p>{recipe.ingredients}</p>
                <h4>Instructions</h4>
             <p>{recipe.instructions}</p>
                </div>
                <div class="card-action">

               <Link exact to="/recipes/recipe-list"><a class="waves-effect waves-light btn-small deep-orange darken-3">  My Recipes </a></Link> 
               <Link exact to="/recipeForm"><a class="waves-effect waves-light btn-small deep-orange darken-3">  Add Recipe </a></Link> 


               <a onClick={(e) => { if (window.confirm('Are you sure you wish to delete this recipe?')) this.deleteRecipe(e) } }class="waves-effect waves-light btn black red-text accent-4" >delete</a>
                </div>
            </div>
            </div>
            </div>



        )
        
    }


    export default RecipeDetails;
    
