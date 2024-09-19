import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const RincianPesanan = ({jumlahPesanan}) => {
  const [pilihLokasi, setPilihLokasi] = useState();

  const prosesPilihan = item => {
    setPilihLokasi(item);
    console.log(item);
  };

  const tampilanCheckout = (justify, font, weight, value, value2, index) => {
    return (
      <View
        key={index}
        style={{
          marginTop: 20,
          flexDirection: 'row',
          borderBottomWidth: 0.4,
          borderColor: 'black',
          justifyContent: justify,
        }}>
        <Text key={index} style={{fontSize: font, fontWeight: weight}}>
          {value}
        </Text>
        <Text key={index}>{value2}</Text>
      </View>
    );
  };

  const checkoutPesanan = jumlahPesanan => {
    const data = [
      {
        justify: 'center',
        font: 18,
        weight: 'bold',
        value: 'Checkout Pesanan',
        value2: '',
      },
      {
        justify: 'space-between',
        font: 14,
        weight: 'normal',
        value: 'Total Pesanan',
        value2: jumlahPesanan,
      },
      {
        justify: 'space-between',
        font: 14,
        weight: 'normal',
        value: 'Diskon (0%)',
        value2: 'Rp. 0',
      },
      {
        justify: 'space-between',
        font: 14,
        weight: 'normal',
        value: 'Pajak',
        value2: 'Rp. 1.200',
      },
      {
        justify: 'space-between',
        font: 14,
        weight: 'bold',
        value: 'Total Pembayaran',
        value2: 'Rp. 41.200',
      },
    ];

    return data.map(({justify, font, weight, value, value2, index}) =>
      tampilanCheckout(justify, font, weight, value, value2, index),
    );
  };

  return (
    <View>
      <View
        style={{
          height: 330,
          marginTop: 10,
          marginBottom: 80,
          marginHorizontal: 30,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#F5EFE6',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Text style={{marginBottom: 6}}>Pilih Lokasi </Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            elevation: 2,
          }}>
          <Picker
            selectedValue={pilihLokasi}
            onValueChange={item => prosesPilihan(item)}>
            <Picker.Item label="Makan di Warung" value="Makan di Warung" />
            <Picker.Item label="Pesan-Antar" value="Pesan-Antar" />
          </Picker>
        </View>
        {checkoutPesanan(jumlahPesanan)}

        <View
          style={{
            position: 'absolute',
            right: '22%',
            marginLeft: -50,
            marginRight: -50,
            bottom: -25,
            width: 300,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#387ADF',
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              elevation: 2,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20}}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RincianPesanan;
