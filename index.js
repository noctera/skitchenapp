/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/Store/index';
import { Provider } from 'react-redux';
import React from 'react';

const AppWithStore = () => (
    <Provider store={store}>
      <App  />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithStore);
