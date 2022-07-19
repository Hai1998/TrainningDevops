import * as React from 'react';
// high order component
// input component 
// output component + contexts value
import { AppContext } from './app-provider';
export function withAppContext(Component) {
	return function AppComponent(props) {
		return (
			<AppContext.Consumer>
				{contexts => <Component {...props} {...contexts} />}
			</AppContext.Consumer>
		);
	};
}