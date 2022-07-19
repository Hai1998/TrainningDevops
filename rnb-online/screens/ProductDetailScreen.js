import React from 'react';
import { View, StyleSheet } from 'react-native';

import { height } from '../constants/Layouts';
import NavigationRightButton from '../components/NavigationRightButton';
import ProductDetail from '../components/ProductDetail';

export class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Product Detail',
    headerBackTitle: null,
    headerRight: (
      <NavigationRightButton toScreen="Checkout" icon="credit-card" />
    )
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ProductDetail></ProductDetail>
      </View>
    );
  }
}
export default ProductDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    height: height
  }
});
