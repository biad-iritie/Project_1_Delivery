import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from './navigation/AppNavigator';
import AppReducer from './store/reducers/Index';

const store = createStore(AppReducer, applyMiddleware(thunk));

export default function App(props) {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </Provider>
  );
}
