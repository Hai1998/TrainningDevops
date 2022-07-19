import React from 'react';

import { View, StyleSheet } from 'react-native';
import NavigationHambergerButton from '../components/NavigationHambergerButton';
import CheckoutComponent from '../components/Checkout';

export default class CheckoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Checkout',
    headerBackTitle: null,
    headerLeft: <NavigationHambergerButton toScreen="Cart" icon="menu" />
  };
  render() {
    return (
      <View style={styles.container}>
        <CheckoutComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
