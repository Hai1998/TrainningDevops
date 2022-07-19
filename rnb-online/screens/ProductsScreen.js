import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavigationRightButton from '../components/NavigationRightButton';
import NavigationHambergerButton from '../components/NavigationHambergerButton';
import Products from '../components/Products';
import i18n from '../i18n';

export class ProductsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: i18n.t('foo'),
    headerBackTitle: null,
    headerLeft: <NavigationHambergerButton toScreen="Cart" icon="menu" />,
    headerRight: <NavigationRightButton toScreen="Cart" icon="shopping-cart" />
  });
  
  render() {
    return (
      <View style={styles.container}>
        <Products></Products>
      </View>
    );
  }
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
