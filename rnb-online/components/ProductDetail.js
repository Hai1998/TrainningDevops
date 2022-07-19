import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import { randomText } from '../data';
import { getProductDetail } from '../service/api';
import { width, height, spacing, headingFontSize } from '../constants/Layouts';
import Colors from '../constants/Colors';
import { withAppContext } from '../context/app';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    const fullDescription = randomText(5, 'paragraphs');
    this.state = {
      quantity: 1,
      fullDescription,
      productDetail: {

      }
    };

    this.changeQuantity = this.changeQuantity.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  handleQuantityChange(text) {
    this.setState({ quantity: text });
  }
  changeQuantity(type = 'increase') {
    const { quantity } = this.state;
    let newQuatity =
      type === 'increase' ? parseInt(quantity) + 1 : parseInt(quantity) - 1;
    if (newQuatity < 0) newQuatity = 0;
    this.setState({
      quantity: newQuatity
    });
  }

  componentDidMount() {
    const { onShowLoading, onHideLoading } = this.props;
    const { navigation } = this.props;
		const id = navigation.getParam('id', '5bcbf511696b664906832519');
		if (id) {
      onShowLoading();
      getProductDetail(id).then(json => {
        onHideLoading();
        this.setState({
          productDetail: json.body
        });
      });
    }
    
  }
  render() {
    const { navigation, onCartAddItem } = this.props;
    const { productDetail } = this.state;
    const { quantity, fullDescription } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollable}>
          <View style={styles.detailImage}>
            <View style={styles.itemImageWrap}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: productDetail.thumbnail }}
              />
            </View>
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{productDetail.name}</Text>
            <View style={styles.productPriceWrap}>
              <Text style={styles.productPrice}>
                Price: ${productDetail.salePrice}
              </Text>
              {productDetail.salePrice < productDetail.originalPrice && (
                <Text style={styles.productPriceOriginal}>
                  ${productDetail.originalPrice}
                </Text>
              )}
            </View>
            <Text style={styles.shortDescription}>
              {productDetail.shortDescription}
            </Text>
          </View>
          <View style={styles.productDetail}>
            <Text>{fullDescription}</Text>
          </View>
        </ScrollView>
        <View style={styles.productAddToCartWrap}>
          <Button
            buttonStyle={styles.button}
            icon={<Icon name="minus" size={24} color="white" />}
            title=""
            onPress={() => {
              this.changeQuantity('decrease');
            }}
          />
          <Input
            value={quantity.toString()}
            keyboardType="number-pad"
            onChangeText={this.handleQuantityChange}
            inputContainerStyle={styles.quantityInput}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            type="number"
          />
          <Button
            buttonStyle={styles.button}
            icon={<Icon name="plus" size={24} color="white" />}
            title=""
            onPress={() => {
              this.changeQuantity('increase');
            }}
          />
          <Button
            containerStyle={styles.buttonCart}
            icon={<Icon name="shopping-cart" size={16} color="white" />}
            title=" Add to Cart"
            type="solid"
            onPress={() => {
              const newItem = {
                ...productDetail,
                quantity,
                total: parseInt(productDetail.salePrice, 10) * quantity
              };
              onCartAddItem(newItem);
              navigation.popToTop();
              navigation.navigate('Cart', newItem);
            }}
          />
        </View>
      </View>
    );
  }
}
export default withAppContext(withNavigation(ProductDetail));
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerScrollable: {
    flex: 1,
    marginBottom: 60
  },
  detailImage: {
    flex: 1,
    width: '100%',
    height: height / 3,
    padding: spacing.medium,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.warningBackground
  },
  image: {
    width: width - spacing.extraLarge,
    height: 200,
    borderRadius: 0,
    backgroundColor: Colors.sessionBackground
  },
  itemImageWrap: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  productInfo: {
    flex: 1,
    width: '100%',
    padding: spacing.medium,
    alignItems: 'center',
    color: Colors.bodyTextColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.warningBackground,
    backgroundColor: Colors.highlightBackground
  },
  shortDescription: {
    fontStyle: 'italic'
  },
  productDetail: {
    padding: spacing.medium
  },
  productName: {
    fontSize: headingFontSize.h3,
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
    fontSize: headingFontSize.h3,
    color: Colors.primaryColor
  },
  productPriceOriginal: {
    fontSize: headingFontSize.h4,
    color: Colors.bodyTextColor,
    textDecorationLine: 'line-through',
    padding: spacing.small
  },

  productAddToCartWrap: {
    flex: 1,
    flexDirection: 'row',
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
  button: {
    width: 50,
    backgroundColor: Colors.primaryColor
  },
  buttonCart: {
    width: width / 2
  },
  containerStyle: {
    width: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantityInput: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: spacing.small,
    paddingRight: spacing.small
  },
  inputStyle: {
    color: Colors.bodyTextColor
  }
});
