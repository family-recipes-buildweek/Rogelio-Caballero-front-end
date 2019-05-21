import React from 'react'



class RecipeForm extends React.Component{
    constructor(){
        super();
        this.state={
            recipe:{
                title:'',
                img:'',
                category:'',
                nameOfSource:'',
                Ingredients:'',
                Intructions:'',
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
    this.props.addRecipe(this.state.friend)
    .then(()=>{
        this.props.history.push('/recipes')
    })
        this.setState({
            recipe:{
                title:'',
                img:'',
                category:'',
                nameOfSource:'',
                Ingredients:'',
                Intructions:'',
            }
        })
    }

render(){
    return (
    <div >
        <form>
        <div class="input-field col s6">
          <input id="icon_prefix1" name='title'  value={this.state.recipe.title} onChange={this.handleChanges} type="text" class="validate"/>
          <label for="icon_prefix1">title</label>
        </div>

        <div class="file-field input-field">
        <div class="btn">
            <span>img</span>
            <input  type="file"/>
        </div>
        <div class="file-path-wrapper">
            <input name='img' value={this.state.recipe.img}  onChange={this.handleChanges} class="file-path validate" type="text"/>
        </div>
        </div>

        <div class="input-field col s6">
          <input name="category" value={this.state.recipe.category}  onChange={this.handleChanges} id="icon_prefix2" type="text" class="validate"/>
          <label for="icon_prefix2">category</label>
        </div>
        <div class="input-field col s6">
          <input name="nameOfSource" value={this.state.recipe.nameOfSource}  onChange={this.handleChanges} id="icon_prefix3" type="text" class="validate"/>
          <label for="icon_prefix3">nameOfSource</label>
        </div>
        
    
        <div class="row">
            <div class="input-field col s12">
            <textarea name="Ingredients" value={this.state.recipe.Ingredients} onChange={this.handleChanges} id="textarea4" class="materialize-textarea"></textarea>
            <label for="textarea4">Ingredients</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
            <textarea name="Intructions" value={this.state.recipe.Intructions}  onChange={this.handleChanges} id="textarea5" class="materialize-textarea"></textarea>
            <label for="textarea5">Intructions</label>
            </div>
        </div>

        </form>
            


        
    </div>


    )

}


}
export default RecipeForm;

