import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css'; 
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
import header from './components/header';


function App() {
  return (
    <Router>
      
      <main className="py-3">
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/restaurants/:id' component={RestaurantDetails}/>
          
        </Container>
      </main>
    </Router>

  );
}

export default App;
// react-router-dom used for routing purpose in react
