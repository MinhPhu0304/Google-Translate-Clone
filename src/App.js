import React, { Component } from 'react';
import {BrowserRouter , Route, Switch, Router } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/LogIn';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/login' component={Login} />
              <Route path='*' component={NotFound}/>
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;