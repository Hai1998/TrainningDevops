import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import NavigationRightButton from '../components/NavigationRightButton';
import NavigationHambergerButton from '../components/NavigationHambergerButton';
import { spacing, headingFontSize } from '../constants/Layouts';
import Colors from '../constants/Colors';
import { withAppContext } from '../context/app';

export class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
    headerBackTitle: null,
    headerLeft: <NavigationHambergerButton toScreen="Cart" icon="menu" />,
    headerRight: (
      <NavigationRightButton toScreen="Checkout" icon="credit-card" />
    )
  };
  keyExtractor = (item, index) => `${item.id}${index.toString()}`;
  renderItem = ({ item, index }) => (
    <View containerStyle={styles.listItemRendered}>
      <View style={styles.listItem}>
        <View style={styles.itemImageWrap}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: item.thumbnail }}
            onPress={() =>
              this.props.navigation.navigate('ProductDetail', { index })
            }
          />
        </View>
        <View style={styles.itemInfo}>
          <Text
            onPress={() =>
              this.props.navigation.navigate('ProductDetail', { index })
            }
            style={styles.productName}
          >
            {item.name}
          </Text>
          <Text style={styles.productPriceOriginal}>
            ${item.salePrice} * {item.quantity} =>{' '}
            <Text style={styles.productPrice}>
              {' '}
              ${parseInt(item.salePrice) * item.quantity}
            </Text>
          </Text>
          <View style={styles.buttonInlineWrap}>
            <Button
              containerStyle={styles.buttonText}
              icon={
                <Icon name="remove" size={16} color={Colors.seconaryColor} />
              }
              title=" remove"
              type="clear"
              onPress={() => {
                this.props.onCartItemRemove(item.id);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    const {
      navigation,
      state: { cart },
      onCartEmpty
    } = this.props;
    const quantity = navigation.getParam('quantity', 1);
    const productDetail = navigation.getParam('productDetail', {
      id: '5bcbf511696b664906832522',
      name: 'Italy Bag',
      image: 'http://api.demo.nordiccoder.com/images/product_2.png',
      thumbnail: 'http://api.demo.nordiccoder.com/images/product_2.png',
      shortDescription: 'product 2',
      categoryId: '5b822e919c300309b7e9bf0e',
      salePrice: 610,
      originalPrice: 710,
      images: [
        'http://api.demo.nordiccoder.com/images/product_2_1.png',
        'http://api.demo.nordiccoder.com/images/product_2_2.png'
      ],
      thumbnails: [
        'http://api.demo.nordiccoder.com/images/product_2_1.png',
        'http://api.demo.nordiccoder.com/images/product_2_2.png'
      ]
    });

    const products = cart.items;
    const totalPrice = cart.price;

    return (
      <View style={styles.container}>
        <View style={styles.dataHeader}>
          <Text>Your Ordering items ({products.length})</Text>
        </View>

        <ScrollView style={styles.containerScrollable}>
          <FlatList
            style={styles.productList}
            data={products}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </ScrollView>

        <View style={styles.productCheckoutWrap}>
          <View style={styles.cartInfoWrap}>
            <View style={styles.cartInfo}>
              <Button
                containerStyle={styles.buttonCartDelete}
                title=" Delete"
                type="outline"
                disabled={!cart.items.length}
                onPress={() => {
                  onCartEmpty();
                }}
              />
            </View>
            <View style={styles.cartInfo}>
              <Text>Total items:</Text>
              <Text style={styles.totalCount}>{products.length}</Text>
            </View>
            <View style={styles.cartInfo}>
              <Text>Total Price:</Text>
              <Text style={styles.totalPrice}>${totalPrice}</Text>
            </View>
          </View>

          <Button
            containerStyle={styles.buttonCart}
            icon={<Icon name="credit-card" size={24} color="white" />}
            title=" Checkout"
            type="solid"
            disabled={!cart.items.length}
            onPress={() => {
              this.props.navigation.navigate('Checkout');
            }}
          />
        </View>
      </View>
    );
  }
}
export default withAppContext(withNavigation(Cart));

const styles = StyleSheet.create({
  container: {
		flex: 1
	},
  containerScrollable: {
    flex: 1,
    marginBottom: 60
  },
  dataHeader: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: Colors.sessionBackground
  },
  listItemRendered: {
    flex: 1
  },
  listItem: {
    flex: 1,
    height: 101,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.warningBackground
  },
  itemImageWrap: {
    flex: 0.3,
    height: 100,
    flexDirection: 'row',
    padding: spacing.medium,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 0,
    backgroundColor: Colors.sessionBackground
  },
  itemInfo: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'center'
  },
  productName: {
    fontSize: headingFontSize.h4,
    color: Colors.seconaryColor
  },
  productPriceWrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productPrice: {
    fontSize: headingFontSize.h4,
    color: Colors.primaryColor
  },
  productPriceOriginal: {
    fontSize: headingFontSize.h5,
    color: Colors.bodyTextColor,
    padding: spacing.small
  },
  productCheckoutWrap: {
    flex: 1,
    width: '100%',
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'space-around',
    color: Colors.bodyTextColor,
    borderTopWidth: 2,
    borderTopColor: Colors.primaryColor,
    backgroundColor: Colors.sessionBackground,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  cartInfoWrap: {
    height: 100,
    flexDirection: 'row'
  },
  cartInfo: {
    flex: 0.33,
    fontSize: headingFontSize.h4,
    color: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalCount: {
    fontSize: headingFontSize.h3,
    color: Colors.bodyTextColor
  },
  totalPrice: {
    fontSize: headingFontSize.h3,
    color: Colors.primaryColor
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primaryColor
  },
  buttonInlineWrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  buttonText: {
    marginRight: 2
  },
  buttonInline: {
    width: 40,
    marginRight: 2
  },
  buttonCart: {
    width: '100%'
  }
});
