import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TermstScreen extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text>Setting > Terms and condition Screen</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingTop: 20
  }
});
