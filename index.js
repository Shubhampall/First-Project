/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ConfigStore from './src/Store/store/index';
import {Provider} from 'react-redux';
import React from 'react';
import rootreducer from './src/Store/services/Reducer/index';
import {createStore} from 'redux';
const store = createStore(rootreducer);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
