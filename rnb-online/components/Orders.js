import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, Icon } from 'react-native-elements';
import { format } from 'date-fns';
import Colors from '../constants/Colors';
import { headingFontSize } from '../constants/Layouts';
import { getProducts } from '../service/api';
import { withAppContext } from '../context/app';
import { getOrders } from '../service/api';
import IconCustom from './IconCustom';

export class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  keyExtractor = (item, index) => `${item.id}${index.toString()}`;
  renderItem = ({ item, index }) => {
    const dateOrder = format(new Date(item.orderDate), 'MM/DD/YYYY HH:MM:SS');
    const dateShipped = format(
      new Date(item.shippedDate),
      'MM/DD/YYYY HH:MM:SS'
    );
    let isDone = true;
    let color = 'green';

    if (item.status === 'InProgressing') {
      isDone = false;
      icon = 'spinner';
      color = 'gold';
    }
    if (item.status === 'Cancelled') {
      isDone = false;
      icon = 'stop-circle-o';
      color = 'red';
    }
    return (
      <Card containerStyle={[styles.listItem, { borderColor: color }]}>
        <View style={[styles.itemInfo]}>
          <Text>Name: {item.name}</Text>
          <Text>CustomerId: {item.customerId}</Text>
          
          <Text>Status: <IconCustom completed={isDone} size={16} color={color}/> {item.status} </Text>
          <Text>orderDate: {dateOrder}</Text>
          <Text>shippedDate: {dateShipped}</Text>
        </View>
      </Card>
    );
  };

  componentDidMount() {
    getOrders().then(res => {
      this.setState({
        orders: res.body
      });
    });
  }
  render() {
    const { orders } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={orders}
          ListHeaderComponent={
            <View style={styles.dataHeader}>
              <Text>Orders ({orders.length})</Text>
            </View>
          }
          stickyHeaderIndices={[0]}
          ListFooterComponent={
            <Text style={styles.dataFooter}>Total: ({orders.length})</Text>
          }
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default withAppContext(withNavigation(Orders));

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
});
