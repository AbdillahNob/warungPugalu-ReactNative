import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CheckBox from '@react-native-community/checkbox';

import HeaderKeranjang from '../components/Keranjang/HeaderKeranjang';
import HeaderKeranjang2 from '../components/Keranjang/HeaderKeranjang2';
import CheckoutButton from '../components/Keranjang/CheckoutButton';

const Keranjang = () => {
  const [dataKeranjang, setDataKeranjang] = useState([]);
  const [kupon, setKupon] = useState();

  useEffect(() => {
    fetch('http://10.0.2.2:3000/dataKeranjang/')
      .then(res => res.json())
      .then(data => setDataKeranjang(data));
  }, []);

  const tambah = (index, harga) => {
    let vDataKeranjang = [...dataKeranjang];
    vDataKeranjang[index].qty++;

    setDataKeranjang(vDataKeranjang);
    // console.log(vDataKeranjang[index].qty);
  };

  const kurang = index => {
    let vDataKeranjang = [...dataKeranjang];

    vDataKeranjang[index].qty > 0
      ? vDataKeranjang[index].qty--
      : (vDataKeranjang[index].qty = 0);

    setDataKeranjang(vDataKeranjang);
  };

  const jumlah = (id, total) => {
    const vDataKeranjang = dataKeranjang;
    return vDataKeranjang.map(item => {
      if (item.id == id) {
        // !total utk menampilkan jmlh quantity
        if (!total) {
          return item.qty;
        }
        return item.qty * item.harga;
      }
    });
  };

  const ubahCheck = index => {
    let vDataKeranjang = [...dataKeranjang];
    vDataKeranjang[index].check = !vDataKeranjang[index].check;

    setDataKeranjang(vDataKeranjang);
    // console.log(vDataKeranjang[index].check);
  };

  const fKupon = value => setKupon(value);

  return (
    <View style={style.container}>
      <HeaderKeranjang></HeaderKeranjang>
      <HeaderKeranjang2></HeaderKeranjang2>
      <View
        style={{
          marginBottom: -10,
          marginTop: -15,
          flex: 1,
        }}>
        <FlatGrid
          itemDimension={350}
          data={dataKeranjang}
          showsVerticalScrollIndicator={false}
          style={{marginLeft: 12, marginBottom: 40, marginTop: 10}}
          renderItem={({item, index}) => (
            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                marginLeft: -6,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                width: 360,
                height: 150,
                flexDirection: 'row',
                elevation: 3,
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Image
                source={{uri: item.gambar}}
                resizeMode="cover"
                style={{width: 130, height: 130, borderRadius: 8}}></Image>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 1,
                  marginLeft: 12,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: -14,
                  }}>
                  <CheckBox
                    onValueChange={() => ubahCheck(index)}
                    onCheckColor="green"
                    CheckoutButton="black"
                    value={item.check}
                    style={{marginLeft: -6}}
                  />
                  <TouchableOpacity>
                    <Icon
                      name="xmark"
                      size={20}
                      color="black"
                      style={{marginRight: 12, marginTop: 8}}></Icon>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 18,
                    marginTop: 2,
                  }}>
                  {item.makanan}
                </Text>
                <Text style={{marginTop: 2}}>Rp. {item.harga}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 14,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 89,
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity onPress={() => kurang(index)}>
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          borderWidth: 1,
                          borderRadius: 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: '#92A2BB',
                        }}>
                        <Icon name="minus" size={10} color={'black'}></Icon>
                      </View>
                    </TouchableOpacity>
                    <Text>{item.qty}</Text>
                    <TouchableOpacity
                      onPress={() => tambah(index, item.harga, item.id)}>
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          borderWidth: 1,
                          borderRadius: 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: '#92A2BB',
                        }}>
                        <Icon name="plus" size={10} color={'black'}></Icon>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginRight: 10, marginTop: 5}}>
                    Rp. {jumlah(item.id, 'total')}
                  </Text>
                </View>
              </View>
            </View>
          )}
          numColumns={1}
        />
      </View>

      <SafeAreaView
        style={{
          marginTop: -18,
          marginBottom: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Masukkan Kupon"
          onChangeText={value => fKupon(value)}
          keyboardType="default"
          style={{
            width: '80%',
            paddingVertical: 8,
            backgroundColor: '#9CAFAA',
            borderRadius: 6,
            paddingLeft: 20,
            elevation: 1,
            borderWidth: 1,
            borderColor: '#4F4F4F',
            fontSize: 16,
            fontWeight: 'bold',
          }}></TextInput>
        <View
          style={{
            width: 120,
            position: 'absolute',
            bottom: 38,
            left: 50,
            backgroundColor: '#9CAFAA',
          }}>
          <Text
            style={{fontSize: 10, fontStyle: 'italic', textAlign: 'center'}}>
            For Your Discount Food
          </Text>
        </View>
      </SafeAreaView>
      <CheckoutButton
        dataKeranjang={dataKeranjang}
        kupon={kupon}></CheckoutButton>
    </View>
  );
};

export default Keranjang;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CAFAA',
  },
});
