import React from 'react';
import {
  StyleSheet
} from 'react-native';

import AppContainer from './navigations/app-container';
import AppProvider from './context/app/app-provider';
import Loading from './components/Loading';

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <AppContainer />
        <Loading style={styles.indicator} />
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  indicator: {
    flex: 1
  }
});
