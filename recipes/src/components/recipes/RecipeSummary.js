import React from 'react';



const RecipeSummary =(props)=>{
return (
    

<div class="col s12 m7">
    <h5 class="header">{props.recipe.title}</h5>
    
    <div class="card horizontal">
  
      <div class="card-image">
        <img src={props.recipe.img}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p class="flow-text">I am a very simple card. I am good at containing small bits of information.</p>
        
        </div>
        <div class="card-action">
          <a href="#">details</a>
        </div>
      </div>
     
    </div>
  </div>
  
)

}
export default RecipeSummary;

