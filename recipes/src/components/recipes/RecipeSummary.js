import React from 'react';



const RecipeSummary =(props)=>{
return (
  <div class="col s12 m7 hoverable">
    <h5 class="header black-text">{props.recipe.title}</h5>
    
    <div class="card horizontal" >
  
  
      <div class="card-image   ">
        <img src={props.recipe.img}/>
      </div>
      <div class="card-stacked">
      
        <div class="card-content">
        <h2 class="flow-text black-text">Type:{props.recipe.category}</h2>
        <h2 class="flow-text black-text">Source:{props.recipe.nameOfSource}</h2>
     
        </div>
        <div class="card-action">
          <a href="#" class= "deep-orange-text darken-3" >details</a>
          
        </div>
        
      </div>
     
    </div>
  </div> 
      
  
  
)

}
export default RecipeSummary;

