import React from 'react';



const RecipeSummary =(props)=>{
return (
  <div class="col s12 m7 hoverable">
    <h5 class="header black-text">{props.recipe.title}</h5>
    
   
        <div class="card-action">
        <button class="waves-effect waves-light btn-small deep-orange darken-3">details</button> 
          
        </div>
        
     
  </div> 
      
  
  
)

}
export default RecipeSummary;

