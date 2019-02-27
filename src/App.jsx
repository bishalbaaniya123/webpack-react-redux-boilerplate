import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux-stuffs/store/store';

import TestComponent from './Pages/Test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={TestComponent} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default hot(module)(App);
