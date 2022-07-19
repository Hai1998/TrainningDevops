import React from 'react';
import { View, StyleSheet } from 'react-native';

import CartCheckoutThankYou from '../components/CartCheckoutThankYou';

export default class CartCheckoutThankYouScreen extends React.Component {
	static navigationOptions = {
		title: 'Payment successfully',
		headerLeft: null,
		headerBackTitle: null
	};
	render() {
    return (
      <View style={styles.container}>
        <CartCheckoutThankYou/>
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
