import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
/**
 * heading font for heading text
 */
export const headingFontSize = {
	h1: 48,
	h2: 32,
	h3: 24,
	h4: 16,
	h5: 14
}
export const spacing = {
	small: 5,
	medium: 10,
	large: 20,
	extraLarge: 50
};

/**
 * using for header of navigator
 */
export const headerStyleGeneric = {
	headerStyle: { height: 50 },
	headerTitleStyle: {
		fontSize: 20
	},
	headerTitleContainerStyle: {
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
	spacing,
	headingFontSize,
	headerStyleGeneric
};
