import React from 'react';

// import RecipeSummary from './RecipeSummary'
import { connect } from "react-redux";
import SearchBar from './SearchBar'
import RecipeDetails from './RecipeDetails';
import { Route} from 'react-router-dom';
import RecipeContainer from './RecipeContainer'
import { getData,deleteRecipe } from "../store/actions/recipesActions";



class RecipeList extends React.Component {
    constructor(){
        super();
        this.state = {
            deletingRecipeId: null,
            editingRecipe: null,
            filteredRecipes:[],
            searchTerm:''
    }
}


componentDidMount(){
    this.props.getData();
    console.log(this.props.recipes)
}


searchRecipesHandler=e=>{
    const data = Array.from(this.props.recipes);
const recipes=data.filter(recipe=>{if(recipe.title.includes(e.target.value)){return recipe;}
})
this.setState({filteredRecipes:recipes});
}

deleteRecipe = id => {
    this.setState({ deletingRecipeId: id });
    this.props.deleteRecipe(id);
    console.log(id)
  };


 

render(){
    return (
        
        <div className="list">
        
        <div>
     
     
        <Route exact path="/recipes/recipe-list" render={props=>{
            return (<SearchBar {...props} searchTerm={this.state.searchTerm} searchRecipes={this.searchRecipesHandler}/>)
        }}/>


        <Route  exact path="/recipes/recipe-list" render={props=>{
           return ( <RecipeContainer {...props} deleteRecipe={this.deleteRecipe} recipes={this.state.filteredRecipes.length>0?this.state.filteredRecipes:this.props.recipes}/>)
        }}/>


         <Route path="/recipes/recipe-list/:id" render={ (props) => {
            return(<RecipeDetails {...props}  deleteRecipe={this.deleteRecipe} recipes={this.props.recipes}/>)
          }} />
        
        </div>
       
        </div>
       
       
    )
}
}


const mapStateToProps = state => ({
    recipes: state.recipes,
    loggingIn: state.loggingIn,
    deletingRecipe:state.deletingRecipe,
  });
  export default connect(
    mapStateToProps,
    {getData,deleteRecipe}
  )(RecipeList);


