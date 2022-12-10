import React from 'react';
import './App.css';
import {Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login/Index';
import Pay from './pages/Pay/Index';
import Register from './pages/Register';
const App = () => {
  return (
    <div className='container'>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/cart' component={Cart} />
          <Route path='/login'component={Login}/> 
          <Route path='/pay'component={Pay}/> 
          <Route path='/register' component = {Register} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;