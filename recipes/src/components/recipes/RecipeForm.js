import React from 'react'



class RecipeForm extends React.Component{
        state={
        title:'',
        img:'',
        category:'',
        nameOfSource:'',
        Ingredients:'',
        Intructions:'',
        }


        handleChanges=(e)=>{
            e.preventDefault();
            this.setState({
                [e.target.name]:e.target.value
            })
        }

render(){
    return (
    <div >
        <form>
        <div class="input-field col s6">
          <input id="icon_prefix1" type="text" class="validate"/>
          <label for="icon_prefix1">title</label>
        </div>

        <div class="file-field input-field">
        <div class="btn">
            <span>img</span>
            <input type="file"/>
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" type="text"/>
        </div>
        </div>

        <div class="input-field col s6">
          <input id="icon_prefix2" type="text" class="validate"/>
          <label for="icon_prefix2">category</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_prefix3" type="text" class="validate"/>
          <label for="icon_prefix3">nameOfSource</label>
        </div>
        
    
        <div class="row">
            <div class="input-field col s12">
            <textarea id="textarea4" class="materialize-textarea"></textarea>
            <label for="textarea4">Ingredients</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
            <textarea id="textarea5" class="materialize-textarea"></textarea>
            <label for="textarea5">Intructions</label>
            </div>
        </div>





        </form>
            


        
    </div>


    )

}


}
export default RecipeForm;

