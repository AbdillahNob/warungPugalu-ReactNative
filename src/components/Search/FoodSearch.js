import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const FoodSearch = ({data}) => {
  const navigation = useNavigation();

  const gambarMakanan = ({item}) => (
    <View>
      <TouchableOpacity
        style={{
          elevation: 3,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          marginLeft: 22,
          paddingHorizontal: 6,
          paddingVertical: 10,
          marginRight: 2,
          marginBottom: 30,
          flexDirection: 'column',
        }}
        onPress={() => navigation.navigate('Detail', {item: item})}>
        <Image
          source={{uri: item.gambar}}
          resizeMode="cover"
          style={{
            width: 150,
            height: 150,
            marginLeft: 1,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 6,
              color: 'black',
            }}>
            {item.makanan}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 6,
            }}>
            <Text style={{color: 'black'}}>
              Rp. {item.harga} |
              <Text style={{color: '#FF004D', fontWeight: 'bold'}}>
                {' '}
                {item.rate}{' '}
              </Text>
            </Text>
            <Image
              source={require('../../image/starRate.png')}
              style={{width: 13, height: 13, marginTop: 3}}
            />
          </View>
          <Text
            style={{
              marginTop: 8,
              fontSize: 12,
              marginBottom: 12,
            }}>
            by {item.author}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: -6,
          }}>
          <TouchableOpacity style={{left: 35}}>
            <Icon name="cart-plus" size={26} color={'black'}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={{left: 60}}>
            <Image
              source={require('../../image/heart.jpg')}
              style={{
                width: 34,
                height: 34,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}></Image>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        marginTop: 10,
      }}>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={gambarMakanan}
      />
    </View>
  );
};

export default FoodSearch;
