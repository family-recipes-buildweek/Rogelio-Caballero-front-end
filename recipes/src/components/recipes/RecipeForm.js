import React from 'react'
import { connect } from 'react-redux';
import { addRecipe } from "../store/actions/recipesActions";

class RecipeForm extends React.Component{
   state={
            recipe:{
                title:'',
                // category:'',
                // nameOfSource:'',
                // ingredients:'',
                instructions:'',
            }
           
       }

        handleChanges=(e)=>{
            this.setState({
                recipe:{
                    ...this.state.recipe,
                    [e.target.name]:e.target.value
                }
               
            })
        }

    addRecipe=e=>{
    e.preventDefault();
    this.props.addRecipe(this.state.recipe)
    .then(()=>{
        this.props.history.push('/recipes/recipe-list')
    })
        this.setState({
            recipe:{
                title:'',
                // category:'',
                // nameOfSource:'',
                // ingredients:'',
                intructions:'',
            }
        })
    }

render(){
    return (
    <div >
        <h1>Add New Recipe</h1>
        <form onSubmit={this.addRecipe}>
        <div class="input-field col s6">
          <input id="icon_prefix1" name='title'  value={this.state.recipe.title} onChange={this.handleChanges} type="text" class="validate"/>
          <label for="icon_prefix1">title</label>
        </div>

        {/* <div class="file-field input-field">
        <div class="btn deep-orange darken-3">
            <span>img</span>
            <input  type="file"/>
        </div>
        <div class="file-path-wrapper">
            <input name='img' value={this.state.recipe.img}  onChange={this.handleChanges} class="file-path validate" type="text"/>
        </div>
        </div> */}

     {/* <div class="input-field col s6">
         <input name="category" value={this.state.recipe.category}  onChange={this.handleChanges} id="icon_prefix2" type="text" class="validate"/>
          <label for="icon_prefix2">category</label>
        </div>
        <div class="input-field col s6">
         <input name="nameOfSource" value={this.state.recipe.nameOfSource}  onChange={this.handleChanges} id="icon_prefix3" type="text" class="validate"/>
         <label for="icon_prefix3">nameOfSource</label>
        </div>
        
    
       <div class="row">
            <div class="input-field col s12">
           <textarea name="ingredients" value={this.state.recipe.ingredients} onChange={this.handleChanges} id="textarea4" class="materialize-textarea"></textarea>
           <label for="textarea4">ingredients</label>
           </div>
       </div> */}

        <div class="row">
            <div class="input-field col s12">
            <textarea name="instructions"  alue={this.state.recipe.instructions}  onChange={this.handleChanges} id="textarea5" class="materialize-textarea deep-orange-text darken-3"></textarea>
            <label for="textarea5">instructions</label>
            </div>
        </div>
        <button   class="btn waves-effect waves-light deep-orange darken-3" type="submit" name="action">Add
       
       </button>
        </form>
            


        
    </div>


    )

}


}
const mapStateToProps = ({ addingRecipe }) => ({
    addingRecipe
  });
  
  export default connect(
    mapStateToProps,
    { addRecipe }
  )(RecipeForm);

