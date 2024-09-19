import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import HeaderKeranjang from '../components/Keranjang/HeaderKeranjang';
import {SafeAreaView} from 'react-native-safe-area-context';

const Checkout = () => {
  const route = useRoute();
  const dataKeranjang = route.params.dataKeranjang;
  const kupon = route.params.kupon;
  const [nama, setNama] = useState();
  const [jenisPesanan, setJenisPesanan] = useState();

  const cekDataKeranjang = () => {
    // console.log(dataPesanan);

    return dataKeranjang.map(item => {
      return item.makanan;
    });
  };
  const cekkupon = () => {
    return kupon;
  };

  const fNama = value => {
    setNama(value);
    console.log(value);
  };

  const tampilanIdentitas = (placeholder, text, index) => {
    return (
      <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
        <TextInput
          key={index}
          placeholder={placeholder}
          style={{
            paddingVertical: 8,
            width: '80%',
            backgroundColor: '#F3F3F3',
            borderWidth: 1,
            borderColor: '#4F4F4F',
            paddingLeft: 20,
            borderRadius: 4,
            elevation: 1,
          }}
          keyboardType="default"
          onChangeText={value => fNama(value)}
        />
        <View
          style={{
            backgroundColor: '#F3F3F3',
            position: 'absolute',
            top: -10,
            left: 48,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10}}>{text}</Text>
        </View>
      </View>
    );
  };

  const fJenisPesanan = value => {
    setJenisPesanan(value);
  };

  const cJenisPesanan = () => {
    const check = jenisPesanan;
    const alamat = [
      {placeholder: 'Masukkan Kecamatan', text: 'Your Address'},
      {placeholder: 'Masukkan Desa/Kelurahan', text: 'Your Address'},
      {placeholder: 'Masukkan nama Jalan/Dusun', text: 'Your Address'},
      {placeholder: 'Masukkan No Telepon', text: 'Your Phone'},
    ];

    // Check Jenis Pesanan
    if (check === 'makanDiLuar') {
      console.log(check);
      return alamat.map(({placeholder, text, index}) =>
        tampilanIdentitas(placeholder, text, index),
      );
    }
  };

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={'#F5EFE6'}
        barStyle={'dark-content'}></StatusBar>
      <HeaderKeranjang />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        {tampilanIdentitas('Masukkan Nama Anda', 'Your Name')}

        <View
          style={{
            borderWidth: 1,
            width: '80%',
            marginTop: 25,
            backgroundColor: '#F3F3F3',
            borderColor: '#4F4F4F',
            borderRadius: 4,
            height: 46,
            justifyContent: 'center',
          }}>
          <Picker
            selectedValue={jenisPesanan}
            onValueChange={(value, index) => fJenisPesanan(value)}>
            <Picker.Item label="Makan diwarung" value="makanDiWarung" />
            <Picker.Item label="Makan diluar" value="makanDiLuar" />
          </Picker>
        </View>
        {cJenisPesanan()}
      </SafeAreaView>
      <Text>Makanan anda : {cekDataKeranjang()}</Text>
      <Text>{cekkupon()}</Text>
    </View>
  );
};

export default Checkout;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
});
