import { createStackNavigator } from 'react-navigation';

import CartScreen from '../screens/CartScreen';

const CartStack = createStackNavigator({ screen: CartScreen });

export default CartStack;
