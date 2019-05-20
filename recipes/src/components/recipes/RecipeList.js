import React from 'react';

import RecipeSummary from './RecipeSummary'
import './recipes.css'
import styled from 'styled-components'
import RecipeForm from "./RecipeForm"
import SearchBar from './SearchBar'


const SummaryCard=styled.div`
display:flex;
flex-wrap:wrap;
width:500px;
height:600px;
margin:20px 20px;
`




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
                            id:1,
                            title:'Yum-Yum-Tacos',
                            img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
                            instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                            nameOfSource:'mom',
                            category:'mexican',
                            Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                
                        },
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
                            id:1,
                            title:'Yum-Yum-Tacos',
                            img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
                            instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                            nameOfSource:'mom',
                            category:'mexican',
                            Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                
                        },
                        {
                            id:1,
                            title:'Yum-Yum-Tacos',
                            img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
                            instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                            nameOfSource:'mom',
                            category:'mexican',
                            Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
                
                        },
                    ]
    }
}

 

render(){

    return (
        <div className="list">
        <h1>Recipes</h1>
       < SummaryCard>
        <div>
            <SearchBar/>
        
        {this.state.recipes.map(recipe=>{
            return (
                <RecipeSummary recipe={recipe}/>
            )
        })}
        </div>
    </SummaryCard>
    {/* <RecipeForm/> */}
        </div>
       
       
    )
}
}


    
export default FriendsList;


