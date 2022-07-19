import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tile, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CartCheckoutThankYou extends React.Component {
	render() {
    return (
      <View style={styles.container}>
        <Tile
					title="Thanks for order!"
          featured
					caption="Your order would be delivered in 1 hour."
					onPress={() => {
						this.props.navigation.navigate('Home');
					}}
        />
				<Button
					title="Back to home"
					onPress={() => {
						this.props.navigation.navigate('Home');
					}}
				/>
      </View>
    );
  }
}
export default withNavigation(CartCheckoutThankYou);
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
