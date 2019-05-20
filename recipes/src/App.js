import React from 'react';
import NavBar from './components/layout/NavBar'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    
    <Router>
    <div className="App">
    <NavBar/>

      
    </div>
    </Router>
    
  );
}

export default App;
