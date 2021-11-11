import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './navigation/index';
import navigationService from './navigation/navigationService';
import { Provider } from 'react-redux';
import store from "./reducers"

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <AppContainer
            ref={(navigatorRef) => {
              navigationService.setTopLevelNavigator(navigatorRef);
            }}
            {...this.props}
          />
        </Provider>
      </SafeAreaView>
    );
  }
};