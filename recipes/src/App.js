import React from 'react';
import NavBar from './components/layout/NavBar'
import RecipeList from './components/recipes/RecipeList'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import SignIn from "./components/auth/SignIn"
import RecipeForm from './components/recipes/RecipeForm'
import RecipeDetails from './components/recipes/RecipeDetails'
import SignUp from "./components/auth/SignUp"

function App() {
  return (
    
    <Router>
       <NavBar/>
    <div className="App">
    <Route path="/login" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/recipes" component={RecipeList}/>
    <Route path="/recipeForm" component={RecipeForm}/>
    <Route path="/recipe/:id" component={RecipeDetails}/>
    </div>
    </Router>
    
  );
}

export default App;
