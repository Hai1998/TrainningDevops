import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavigationRightButton from '../components/NavigationRightButton';
import NavigationHambergerButton from '../components/NavigationHambergerButton';
import Orders from '../components/Orders';
export default class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Order',
    headerBackTitle: null,
    headerLeft: <NavigationHambergerButton icon="menu" />,
    headerRight: (
      <NavigationRightButton toScreen="Cart" icon="shopping-cart" />
    )
  };
  render() {
    return <View style={styles.container}>
      <Orders />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingTop: 20
  }
});
