import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import TestComponent from './Pages/Test';
import Login from './Pages/Login';
import NotFoundComponent from './Pages/NotFound';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/test" component={TestComponent}/>
        <Route path="/" exact component={TestComponent}/>
        <Route component={NotFoundComponent}/>
      </Switch>
    );
  }
}

export default hot(module)(App);
// export default hot(module)(App);
