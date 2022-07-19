export const calculateTotalPrice = (products) => {
	return products.reduce(((total, product)  => {
		return total + product.total
	}), 0);
}

export default {
	calculateTotalPrice
}