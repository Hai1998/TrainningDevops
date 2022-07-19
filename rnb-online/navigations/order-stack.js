import { createStackNavigator } from 'react-navigation';

import OrderScreen from '../screens/OrderScreen';

const OrderStack = createStackNavigator({ screen: OrderScreen });

export default OrderStack;
