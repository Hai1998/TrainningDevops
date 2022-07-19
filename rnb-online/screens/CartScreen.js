import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavigationRightButton from '../components/NavigationRightButton';
import NavigationHambergerButton from '../components/NavigationHambergerButton';
import Cart from '../components/Cart';

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
    headerBackTitle: null,
    headerLeft: <NavigationHambergerButton toScreen="Cart" icon="menu" />,
    headerRight: (
      <NavigationRightButton toScreen="Checkout" icon="credit-card" />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Cart style={styles.cart} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  cart: {
    flex: 1
  }
});
