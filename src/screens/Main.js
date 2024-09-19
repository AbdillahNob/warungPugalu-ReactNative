import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Trending from '../components/Trending';
import Video from '../components/Video';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Main = () => {
  const [kategori, setKategori] = useState([]);
  const [gambarMakanan, setGambarMakanan] = useState([]);
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
      const response = await fetch('http://10.0.2.2:3000/TrendingMakanan/');
      const data = await response.json();
      // console.log(data);
      setGambarMakanan(data);
    } catch (error) {
      console.log('Error Ambil data dari API : ', error);
    }
  };

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={'#9CAFAA'}
        barStyle={'dark-content'}></StatusBar>
      <Header></Header>
      <ScrollView>
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

        <Trending gambarMakanan={gambarMakanan}></Trending>
        <Video gambarMakanan={gambarMakanan}></Video>
      </ScrollView>
      <Dashboard></Dashboard>
    </View>
  );
};

export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CAFAA',
  },

  containerFlat: {
    marginTop: 12,
  },

  textFlat: {
    fontSize: 15,
    paddingHorizontal: 12,
  },

  containerGambar: {
    elevation: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
});
