import React from 'react'
import { connect } from 'react-redux';
import { addRecipe } from "../store/actions/recipesActions";

class RecipeForm extends React.Component{
   state={
            recipe:{
                title:'',
                
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

