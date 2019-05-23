import React from 'react'
import { connect } from 'react-redux';
import { addRecipe } from "../store/actions/recipesActions";

class RecipeForm extends React.Component{
    constructor(){
        super();
        this.state={
            recipe:{
                Title:'',
                Category:'',
                nameOfSource:'',
                Ingredients:'',
                intructions:'',
            }
           
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
                Title:'',
                Category:'',
                nameOfSource:'',
                Ingredients:'',
                intructions:'',
            }
        })
    }

render(){
    return (
    <div >
        <form onSubmit={this.addRecipe}>
        <div class="input-field col s6">
          <input id="icon_prefix1" name='Title'  value={this.state.recipe.Title} onChange={this.handleChanges} type="text" class="validate"/>
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

        <div class="input-field col s6">
          <input name="Category" value={this.state.recipe.Category}  onChange={this.handleChanges} id="icon_prefix2" type="text" class="validate"/>
          <label for="icon_prefix2">category</label>
        </div>
        <div class="input-field col s6">
          <input name="nameOfSource" value={this.state.recipe.nameOfSource}  onChange={this.handleChanges} id="icon_prefix3" type="text" class="validate"/>
          <label for="icon_prefix3">nameOfSource</label>
        </div>
        
    
        <div class="row">
            <div class="input-field col s12">
            <textarea name="Ingredients" value={this.state.recipe.Ingredients} onChange={this.handleChanges} id="textarea4" class="materialize-textarea"></textarea>
            <label for="textarea4">ingredients</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
            <textarea name="intructions" value={this.state.recipe.intructions}  onChange={this.handleChanges} id="textarea5" class="materialize-textarea"></textarea>
            <label for="textarea5">intructions</label>
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

