import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card } from 'react-native-elements';

import Colors from '../constants/Colors';
import { headingFontSize } from '../constants/Layouts';
import { getProducts } from '../service/api';
import { withAppContext } from '../context/app';
import i18n from '../i18n';

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  keyExtractor = (item, index) => `${item.id}${index.toString()}`;
  renderItem = ({ item, index }) => (
    <Card containerStyle={styles.listItem}>
      <View style={styles.itemImageWrap}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: item.image }}
          onPress={() =>
            this.props.navigation.navigate('ProductDetail', { id: item.id })
          }
        />
      </View>
      <View style={styles.itemInfo}>
        <Text
          onPress={() =>
            this.props.navigation.navigate('ProductDetail', { id: item.id })
          }
          style={styles.productName}
        >
          {item.name}
        </Text>
        <Text
          onPress={() =>
            this.props.navigation.navigate('ProductDetail', { id: item.id })
          }
          style={styles.productPrice}
        >
          ${item.salePrice}
        </Text>
      </View>
    </Card>
  );

  componentDidMount() {
    const { onShowLoading, onHideLoading } = this.props;
    onShowLoading();
    getProducts().then(json => {
      onHideLoading();
      this.setState({
        products: json.body
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            style={styles.productList}
            data={products}
            ListHeaderComponent={
              <View style={styles.dataHeader}>
                <Text>{i18n.t('productLength', { length: products.length})}</Text>
              </View>
            }
            stickyHeaderIndices={[0]}
            ListFooterComponent={
              <Text style={styles.dataFooter}>Total: ({products.length})</Text>
            }
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}

export default withAppContext(withNavigation(Products));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  },
  dataHeader: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: Colors.sessionBackground
  },
  dataFooter: {
    padding: 5,
    paddingLeft: 15,
    backgroundColor: Colors.sessionBackground
  },
  flatlistColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  listItem: {
    flex: 1
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 0,
    backgroundColor: Colors.sessionBackground
  },
  itemImageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center'
  },
  productName: {
    fontSize: headingFontSize.h4
  },
  productPrice: {
    fontSize: headingFontSize.h3,
    color: Colors.primaryColor
  }
});
