import React from 'react';

// import RecipeSummary from './RecipeSummary'
import { connect } from "react-redux";
import SearchBar from './SearchBar'
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
}


searchRecipesHandler=e=>{
const recipes=this.props.recipes.filter(r=>{
    if(r.title.includes(e.target.value)){
        return r;
    }
})
this.setState({filteredRecipes:recipes});


}

deleteRecipe = id => {
    this.setState({ deletingRecipeId: id });
    this.props.deleteRecipe(id);
  };




render(){
    return (
        
        <div className="list">
        
        <div>
     
     
        <Route exact path="/recipes/recipe-list" render={props=>{
            return (<SearchBar {...props} searchTerm={this.state.searchTerm} searchRecipes={this.searchRecipesHandler}/>)
        }}/>


        <Route  exact path="/recipes/recipe-list" render={props=>{
           return ( <RecipeContainer {...props} recipes={this.state.filteredRecipes.length>0?this.state.filteredRecipes:this.props.recipes}/>)
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
    loggingIn: state.loggingIn
  });
  export default connect(
    mapStateToProps,
    {getData,deleteRecipe}
  )(RecipeList);


