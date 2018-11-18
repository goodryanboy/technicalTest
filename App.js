import React from 'react';
import { Provider } from 'mobx-react/native';
import { StyleSheet, Text, View } from 'react-native';

import Login from './app/pages/Login';
import Store from './app/mobx/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Login />
      </Provider>
    )
  }
}
