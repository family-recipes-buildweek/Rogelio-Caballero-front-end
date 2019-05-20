import React from 'react';
import NavBar from './components/layout/NavBar'
import RecipeList from './components/recipes/RecipeList'


import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import SignIn from "./components/auth/SignIn"
import RecipeForm from './components/recipes/RecipeForm'

import SignUp from "./components/auth/SignUp"
import RecipeDetails from './components/recipes/RecipeDetails';

function App() {
  return (
    
    <Router>
       <NavBar/>
        <div className="App">
        <Switch>
        <Route  path="/login" component={SignIn}/>
        <Route path="/register" component={SignUp}/>
        <Route path="/recipes" component={RecipeList}/>
        <Route path="/recipeForm" component={RecipeForm}/>
        
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
