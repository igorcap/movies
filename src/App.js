import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import store, { history } from './store';

import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={MovieDetails} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
