import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { withAppContext } from '../context/app';
import { spacing } from '../constants/Layouts';

class Loading extends React.Component {
  render() {
    const {
      state: { isLoading }
    } = this.props;
    if (isLoading) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    } else {
      return null;
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  indicator: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.85)',
    top: 63,
    bottom: 0,
    left: 0,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.extraLarge
  }
});

export default withAppContext(Loading);
