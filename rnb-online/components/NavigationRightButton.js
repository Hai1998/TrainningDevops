import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, withBadge, Badge, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { withAppContext } from '../context/app';

import { tintColor } from '../constants/Colors';


class NavigationRightButton extends React.Component {
  render() {
    const {
      onCartEmpty,
      state: { cart }
    } = this.props;
    
    const BadgedIcon = cart.items.length ? withBadge(cart.items.length)(Icon) : Icon;
    return (
      <View>
        <Button
          type="clear"
          style={styles.container}
          icon={
            <BadgedIcon
              type={this.props.icon}
              name="shopping-cart"
              size={24}
              color={tintColor}
              stype={{position: 'absolute', left: 70}}
            />
          }
          type="clear"
          onPress={() => {
            this.props.navigation.navigate(this.props.toScreen);
            // onCartEmpty();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 40,
    backgroundColor: 'white'
  }
});

export default withAppContext(withNavigation(NavigationRightButton));
