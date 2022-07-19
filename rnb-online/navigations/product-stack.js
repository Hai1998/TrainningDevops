import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartCheckoutThankYouScreen from '../screens/CartCheckoutThankYouScreen';

const ProductStack = createStackNavigator(
  {
    Home: {
      screen: ProductsScreen,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor} />
        )
      }
    },
    ProductDetail: {
			screen: ProductDetailScreen,
			navigationOptions: {
				title: 'Product Detail',
				drawerIcon: ({ tintColor }) => (
					<Icon name="product-hunt" size={24} color={tintColor} />
				)
			}
    },
    Thankyou: {
      screen: CartCheckoutThankYouScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default ProductStack;
