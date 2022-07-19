import React, { Component } from 'react';

import { calculateTotalPrice } from '../../utils';

// Create a new context for the app
export const AppContext = React.createContext({
	app: {

	}
});
// Creates a provider Component
class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			cart: {
				items: [
					// {
					// 	"id": "5bcbf511696b664906832522",
					// 	"name": "Italy Bag",
					// 	"image": "http://api.demo.nordiccoder.com/images/product_2.png",
					// 	"thumbnail": "http://api.demo.nordiccoder.com/images/product_2.png",
					// 	"shortDescription": "product 2",
					// 	"categoryId": "5b822e919c300309b7e9bf0e",
					// 	"salePrice": 610,
					// 	"originalPrice": 710,
					// 	quantity: 2,
					// 	total: 1220
					// },
					// {
					// 	"id": "5bcbf511696b664906832519",
					// 	"name": "Winter Coat from France",
					// 	"image": "http://api.demo.nordiccoder.com/images/product_1.png",
					// 	"thumbnail": "http://api.demo.nordiccoder.com/images/product_1.png",
					// 	"shortDescription": "product 1",
					// 	"categoryId": "5b822e7f9c300309b7e9befc",
					// 	"salePrice": 520,
					// 	"originalPrice": 590,
					// 	quantity: 1,
					// 	total: 520
					// }
				],
				price: 0,
			}
		};
		this.onCartAddItem = this.onCartAddItem.bind(this);
		this.onCartEmpty = this.onCartEmpty.bind(this);
		this.onCartSubmit = this.onCartSubmit.bind(this);
		this.onCartItemRemove = this.onCartItemRemove.bind(this);
		this.onShowLoading = this.onShowLoading.bind(this);
		this.onHideLoading = this.onHideLoading.bind(this);
		this.onToggleLoading = this.onToggleLoading.bind(this);
	}

	onShowLoading() {
		this.setState({
			...this.state,
			isLoading: true
		});
	}

	onHideLoading() {
		this.setState({
			...this.state,
			isLoading: false
		});
	}

	onToggleLoading() {
		this.setState({
			...this.state,
			isLoading: !this.state.isLoading
		});
	}

	onCartItemRemove(itemId) {
		const newItems = this.state.cart.items.filter(item => item.id !== itemId);
		const newPrice = calculateTotalPrice(newItems);
		this.setState({
			...this.state,
			cart: {
				items: newItems,
				price: newPrice
			}
		});
	}
	onCartAddItem(item) {
		
		const newItems = [
			...this.state.cart.items,
			item
		];
		const newPrice = calculateTotalPrice(newItems);

		this.setState({
			...this.state,
			cart: {
				items: newItems,
				price: newPrice
			}
		})
	}

	onCartEmpty() {
		this.setState({
			...this.state,
			cart: {
				items: [],
				price: 0
			}
		});
	}

	onCartSubmit() {
		// do some logic to submit the cart
		// then empty the cart
		this.onCartEmpty();
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					state: this.state,
					onCartEmpty: this.onCartEmpty,
					onCartAddItem: this.onCartAddItem,
					onCartItemRemove: this.onCartItemRemove,
					onCartSubmit: this.onCartSubmit,
					onShowLoading: this.onShowLoading,
					onHideLoading: this.onHideLoading,
					onToggleLoading: this.onToggleLoading
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
export default AppProvider;