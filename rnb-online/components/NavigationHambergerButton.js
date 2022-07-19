import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { tintColor } from '../constants/Colors';

class NavigationHambergerButton extends React.Component {
  render() {
    return (
      <Button
				style={styles.container}
        icon={<Icon name="menu" size={24} color={tintColor} />}
				type="clear"
        onPress={() => {
          this.props.navigation.toggleDrawer();
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 40,
		height: 40,
		backgroundColor: 'white'
  }
});

export default withNavigation(NavigationHambergerButton);
