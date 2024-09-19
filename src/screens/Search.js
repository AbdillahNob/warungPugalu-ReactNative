import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import FoodSearch from '../components/Search/FoodSearch';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Search = () => {
  const [gambarMakanan, setGambarMakanan] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [seleksiKategori, setSeleksiKategori] = useState({
    title: 'Makanan',
  });

  useEffect(() => {
    fetchData();
    fetch('http://10.0.2.2:3000/Kategori/')
      .then(res => res.json())
      .then(data => setKategori(data));
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/Makanan/');
      const data = await response.json();
      setGambarMakanan(data);
    } catch (error) {
      console.log('Error Ambil API : ', error);
    }
  };

  return (
    <View style={{backgroundColor: '#9CAFAA', flex: 1}}>
      <Header></Header>
      <View style={style.containerFlat}>
        <FlatList
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                elevation: 4,
                backgroundColor:
                  seleksiKategori.title == item.title ? '#387ADF' : '#F5EFE6',
                borderRadius: 18,
                marginLeft: 10,
                paddingHorizontal: 1,
                paddingVertical: 10,
                marginRight: 12,
                marginBottom: 4,
              }}
              onPress={() => setSeleksiKategori(item)}>
              <Text style={style.textFlat}>{item.title} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{marginTop: 20, marginBottom: 418}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            marginLeft: 18,
            color: 'black',
          }}>
          Cari Makanan Anda
        </Text>

        <View
          style={{flexDirection: 'row', marginHorizontal: 16, marginTop: 6}}>
          <View
            style={{
              backgroundColor: '#F5EFE6',
              marginTop: 2,
              justifyContent: 'center',
              paddingHorizontal: 16,
              elevation: 4,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}>
            <Icon name="magnifying-glass" size={20}></Icon>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: '#F5EFE6',
              elevation: 4,
              marginTop: 2,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
              flex: 1,
            }}>
            <TextInput placeholder="Search" />
          </View>
        </View>
        <FoodSearch data={gambarMakanan}></FoodSearch>
        <Dashboard></Dashboard>
      </View>
    </View>
  );
};

export default Search;

const style = StyleSheet.create({
  containerFlat: {
    marginTop: 4,
  },

  textFlat: {
    fontSize: 15,
    paddingHorizontal: 12,
  },
});
