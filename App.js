import React, { Component } from "react";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from './scr/reducers';

import AppNavigation from './scr/appNavigation/router';

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
