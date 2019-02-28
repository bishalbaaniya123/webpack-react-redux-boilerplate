import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App.jsx';

import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux-stuffs/store/store';


render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('app'));
