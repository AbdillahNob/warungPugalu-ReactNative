import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const HeaderKeranjang = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar
        backgroundColor={'#F5EFE6'}
        barStyle={'dark-content'}></StatusBar>
      <View style={style.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>Keranjang dan Pembayaran</Text>
        <Icon name="cart-shopping" size={25} color={'black'} style={{}} />
      </View>
    </View>
  );
};

export default HeaderKeranjang;

const style = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    elevation: 6,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
    backgroundColor: '#F5EFE6',
  },
});
