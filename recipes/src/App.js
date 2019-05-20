import React from 'react';
import NavBar from './components/layout/NavBar'
import FriendsList from './components/recipes/RecipeList'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import SignIn from "./components/auth/SignIn"

import SignUp from "./components/auth/SignUp"

function App() {
  return (
    
    <Router>
       <NavBar/>
    <div className="App">
    
    <FriendsList/>
      
       {/* <SignIn/>
       <SignUp/> */}
    </div>
    </Router>
    
  );
}

export default App;
