import React from 'react';

import RecipeSummary from './RecipeSummary'
import './recipes.css'
import styled from 'styled-components'
import RecipeForm from "./RecipeForm"
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';





class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            deletingRecipe: null,
            editingRecipe: null,
            recipes:[
                {
                    id:1,
                    title:'Yum-Yum-Tacos',
                    img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'mexican',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
                {
                    id:2,
                    title:'Get-Chubby-Lasagna',
                    img:'https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
                {
                    id:3,
                    title:'Extra-juicy-Steak',
                    img:'https://images.pexels.com/photos/1268549/pexels-photo-1268549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
            
                {
                    id:4,
                    title:'Some-Salt-Stuff',
                    img:'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'mexican',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
                {
                    id:5,
                    title:'Winos',
                    img:'https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'mexican',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
            
            {
                    id:6,
                    title:'Tiny-Burrito',
                    img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'mexican',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
                {
                    id:7,
                    title:'One-Chicken',
                    img:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                    nameOfSource:'mom',
                    category:'mexican',
                    Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
            
                },
            

            ],
            filteredRecipes:[],
    }
}

// searchRecipesHandler=e=>{
// const recipes=this.state.recipes(r=>{
//     if(r.title.includes(e.target.value)){
//         return r;
//     }
// })
// this.setState({filteredRecipes:recipes});


// }
render(){
    return (
        
        <div className="list">
        <h1>Recipes</h1>
        
        <div>
            <SearchBar />
        <div className="test">
        {this.state.recipes.map(recipe=>{
            return (
                <Link to={`/recipes/${recipe.id}`}>
                <RecipeSummary recipe={recipe}/>
                </Link>
            )
        })}
         
        </div>
        
        <Route exact path="/recipes/:id" render={props=> <RecipeDetails {...props} recipes={this.state.recipes}/>}/>
        
        </div>
       
        </div>
       
       
    )
}
}


    
export default FriendsList;


