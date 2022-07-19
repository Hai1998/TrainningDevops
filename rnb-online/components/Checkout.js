import React from 'react';
import shortid from 'shortid';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Input, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import { spacing } from '../constants/Layouts';
import Colors from '../constants/Colors';
import { withAppContext } from '../context/app';
import { createOrder } from '../service/api';

class Checkout extends React.Component {
  handleSubmitOrder() {
    const { onShowLoading, onHideLoading } = this.props;
    const {
      navigation,
      onCartSubmit,
      state: {
        cart: { items, price }
      }
		} = this.props;
		navigation.navigate('Thankyou');
		return false;

    const today = new Date();
    // assumpt the order will be shipped on next 5 days
    const numberOfDaysToAdd = 5;
    const shippedDate = today;
    shippedDate.setDate(shippedDate.getDate() + numberOfDaysToAdd);

    const payload = {
      id: shortid.generate(),
      name: shortid.generate(),
      orderDate: today.toISOString(),
      shippedDate: shippedDate.toISOString(),
      customerId: shortid.generate(),
      status: 'InProgressing'
    };
    onShowLoading();
    createOrder(payload).then(json => {
      onHideLoading();
      onCartSubmit();
      navigation.navigate('Thankyou');
    });
  }
  render() {
    const {
      state: {
        cart: { items, price }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollable}>
          <Card title="Persional information">
            <ListItem
              title={
                <Input
                  inputContainerStyle={styles.quantityInput}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Full name"
                  value="Your full name"
                />
              }
              leftIcon={{ name: 'person' }}
              bottomDivider
            />

            <ListItem
              title={
                <Input
                  inputContainerStyle={styles.quantityInput}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Email"
                  value="email@gmail.com"
                />
              }
              leftIcon={{ name: 'email' }}
              bottomDivider
            />
            <ListItem
              title={
                <Input
                  inputContainerStyle={styles.quantityInput}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Phone"
                  keyboardType="name-phone-pad"
                />
              }
              leftIcon={{ name: 'phone' }}
              bottomDivider
            />
            <ListItem
              title={
                <Input
                  inputContainerStyle={styles.quantityInput}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Location"
                />
              }
              leftIcon={{ name: 'map-marker', type: 'font-awesome' }}
              bottomDivider
            />
            <ListItem
              title={
                <Input
                  inputContainerStyle={styles.quantityInput}
                  containerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Credit number"
                  value="**** **** **** 1234"
                />
              }
              leftIcon={{ name: 'credit-card' }}
              bottomDivider
            />
          </Card>

          <Card title="Order info">
            <ListItem title={`Total items: ${items.length}`} bottomDivider />
            <ListItem title={`Total Price: ${price}`} />
          </Card>
        </ScrollView>

        <View style={styles.productCheckoutWrap}>
          <Button
            containerStyle={styles.buttonCart}
            title=" Submit"
            type="solid"
            disabled={items.length === 0}
            onPress={() => {
              this.handleSubmitOrder();
            }}
          />
        </View>
      </View>
    );
  }
}

export default withAppContext(withNavigation(Checkout));

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerScrollable: {
    flex: 1,
    marginBottom: 60
  },
  inputText: {
    height: 40
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
  button: {
    width: '100%',
    backgroundColor: Colors.primaryColor
  },
  buttonCart: {
    width: '100%'
  },
  containerStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantityInput: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
    borderTopColor: 'white',
    borderBottomColor: 'white'
  },
  inputStyle: {
    color: Colors.bodyTextColor
  }
});
