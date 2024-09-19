import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CheckoutButton = ({dataKeranjang, kupon}) => {
  const navigation = useNavigation();

  // Apakah ad barang yg diceklis
  const fValidation = () => {
    const dataCheck = dataKeranjang.map(item => {
      if (item.check === true) {
        console.log(item);
        return item.check;
      }
    });
    // console.log(dataCheck);
    if (dataCheck[0] === true) {
      return (
        <TouchableOpacity
          style={{
            width: '80%',
            elevation: 2,
            position: 'absolute',
            bottom: 8,
            left: 40,
            right: 50,
            elevation: 2,
          }}
          onPress={() =>
            navigation.navigate('Checkout', {
              dataKeranjang,
              kupon,
            })
          }>
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: '#2C4E80',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F5EFE6'}}>
              Checkout
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };
  return <View>{fValidation()}</View>;
};

export default CheckoutButton;
