import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Trending = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 20,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Trending
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('Search')}>
          <Text>Liat Semua </Text>
          <Icon name="chevron-forward" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <FlatList
          data={props.gambarMakanan}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                elevation: 3,
                backgroundColor: '#ffffff',
                borderRadius: 20,
                marginLeft: 22,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginRight: 16,
                marginBottom: 4,
              }}
              onPress={() => navigation.navigate('Detail', {item: item})}>
              <Image
                source={{uri: item.gambar}}
                resizeMode="cover"
                style={{
                  width: 200,
                  height: 200,
                  marginLeft: 1,
                  borderRadius: 20,
                }}
              />
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 6,
                    color: 'black',
                  }}>
                  {item.makanan}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black'}}>
                    Rp. {item.harga} |
                    <Text style={{color: '#FF004D', fontWeight: 'bold'}}>
                      {' '}
                      {item.rate}{' '}
                    </Text>
                  </Text>
                  <Image
                    source={require('../image/starRate.png')}
                    style={{width: 13, height: 13, marginTop: 3}}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                  }}>
                  by {item.author}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Trending;
