import React from 'react';
import { StyleSheet, ScrollView, Picker, Text } from 'react-native';
import { DrawerItems, SafeAreaView, withNavigation } from 'react-navigation';
import { Localization } from 'expo';
import { EN, VI } from '../i18n';
import { spacing } from '../constants/Layouts';
import Colors from '../constants/Colors';

class NavigationDrawer extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
			language: Localization.locale
		};
	}

  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
					forceInset={{ top: 'always', horizontal: 'never' }}
					
        >
          <DrawerItems {...this.props} />
        </SafeAreaView>
        <Text style={styles.language}>Current language: {this.state.language}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: spacing.medium
  },
  language: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: Colors.sessionBackground
  },
});

export default withNavigation(NavigationDrawer);
