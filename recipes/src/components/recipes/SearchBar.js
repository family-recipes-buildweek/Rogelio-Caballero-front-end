import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;


const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;



const SearchBar = props => {
    return (
      <Header>
        
          <SearchInput
            type="text"
            placeholder="Search"
            onKeyDown={props.searchPosts}
          />
        
      </Header>
    );
  };
  
  export default SearchBar;

