import React from 'react';
import { StyleSheet, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Localization } from 'expo';
import { setLang, EN, VI } from '../i18n';
import { spacing } from '../constants/Layouts';

class NavigationDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: Localization.locale
		};
	}

	switchLanguage() {
		const newLocale = this.state.language === EN ? VI : EN;
		this.setState(() => ({ language: newLocale }));
	}

	render() {
		return (
			<Picker
				selectedValue={this.state.language}
				style={{ height: 20, width: '100%' }}
				onValueChange={(itemValue, itemIndex) => {
					this.setState({ language: itemValue });
					console.log(this.props.navigation.reset());
					setLang(itemValue);
				}}
			>
				<Picker.Item style={{ fontSize: 14 }} label="English" value={EN} />
				<Picker.Item label="Vietnam" value={VI} />
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white',
		paddingTop: spacing.medium
	}
});

export default withNavigation(NavigationDrawer);
