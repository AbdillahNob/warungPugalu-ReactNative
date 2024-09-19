import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const HeaderKeranjang2 = () => {
  return (
    <View
      style={{
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 15, color: 'black'}}>Keranjang Anda :</Text>
      <Icon
        name="cart-arrow-down"
        size={20}
        color={'black'}
        style={{marginLeft: 8, marginTop: 3}}></Icon>
    </View>
  );
};

export default HeaderKeranjang2;
