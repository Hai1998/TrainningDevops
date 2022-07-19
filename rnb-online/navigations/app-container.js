import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavigationDrawer from '../components/NavigationDrawer';
import ProductStack from './product-stack';
import CartStack from './cart-stack';
import CheckoutStack from './checkout-stack';
import OrderStack from './order-stack';

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: ProductStack,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor} />
        )
      }
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        title: 'Cart',
        drawerIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={24} color={tintColor} />
        )
      }
    },
    Checkout: {
      screen: CheckoutStack,
      navigationOptions: {
        title: 'Checkout',
        drawerIcon: ({ tintColor }) => (
          <Icon name="credit-card" size={24} color={tintColor} />
        )
      }
    },
    Order: {
      screen: OrderStack,
      navigationOptions: {
        title: 'Order',
        drawerIcon: ({ tintColor }) => (
          <Icon name="history" size={24} color={tintColor}/>
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    contentComponent: NavigationDrawer
  }
);

export default createAppContainer(AppNavigator);
