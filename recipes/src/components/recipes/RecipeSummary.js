import React from 'react';



const RecipeSummary =(props)=>{
return (
  <div class="col s12 m7 hoverable">
    <h5 class="header black-text">{props.recipe.title}</h5>
    
    <div class="card horizontal" >
  
  
      <div class="card-image   ">
        <img alt="food-img" src={props.recipe.img}/>
      </div>
      <div class="card-stacked">
      
        <div class="card-content">
        <h2 class="flow-text black-text">Type:{props.recipe.category}</h2>
        <h2 class="flow-text black-text">Source:{props.recipe.nameOfSource}</h2>
     
        </div>
        <div class="card-action">
        <button class="waves-effect waves-light btn-small deep-orange darken-3">details</button> 
          
        </div>
        
      </div>
     
    </div>
  </div> 
      
  
  
)

}
export default RecipeSummary;

