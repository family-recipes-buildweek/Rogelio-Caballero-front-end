import React from 'react';
import styled from 'styled-components';

// const Header = styled.header`
 
//   height: 80px;
//   line-height: 70px;
//   display: flex;
//   justify-content: space-between;
//   background: #ffffff;
// `;


// const SearchInput = styled.input`
//   height: 30px;
//   width: 300px;
//   text-align: center;
// `;



const SearchBar = props => {
    return (
     
       
            <div class="input-field col s6">
          <input id="icon_prefix1" type="text" class="validate"/>
          <label for="icon_prefix1"><i class="fas fa-search"></i></label>
          
        
           
       
        </div>
    );
  };
  
  export default SearchBar;

