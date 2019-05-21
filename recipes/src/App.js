import React from 'react';
import NavBar from './components/layout/NavBar'
import RecipeList from './components/recipes/RecipeList'


import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import SignIn from "./components/auth/SignIn";
import RecipeForm from './components/recipes/RecipeForm';
// import RecipeDetails from './components/recipes/RecipeDetails';
import SignUp from "./components/auth/SignUp";
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    
    <Router>
       <NavBar/>
        <div className="App">
        <Switch>
        <Route  exact path="/" component={SignIn}/>
        <Route exact path="/register" component={SignUp}/>

        <Route  path="/recipes/recipe-list" component={RecipeList}/>
        <Route  path="/recipeForm" component={RecipeForm}/>
     
        
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
