import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

import PropertiMakanan from '../components/Detail/PropertiMakanan';
import Ingredients from '../components/Detail/Ingredients';

const Detail = () => {
  const route = useRoute();
  const item = route.params.item;
  // console.log(item.warna);
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: item.warna, flex: 1}}>
      <StatusBar
        backgroundColor={item.warna}
        barStyle="dark-content"></StatusBar>
      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <View style={{marginLeft: 14}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginLeft: 308,
          }}>
          <TouchableOpacity>
            <Icon name="heart" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#EEEEEE',
          marginTop: 160,
          flex: 1,
          borderTopRightRadius: 80,
          borderTopLeftRadius: 80,
          elevation: 3,
        }}>
        <View
          style={{
            borderRadius: 100,
            elevation: 20,
          }}>
          <Image
            source={{uri: item.gambar}}
            resizeMode="cover"
            style={{
              width: 250,
              height: 250,
              position: 'absolute',
              top: -120,
              right: 70,
              borderRadius: 150,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 140,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: item.warna,
              fontWeight: 'bold',
            }}>
            {item.makanan}
          </Text>
          <TouchableOpacity>
            <Icon
              name="cart-plus"
              size={30}
              color={'black'}
              style={{marginLeft: 10}}></Icon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'justify',
              color: 'black',
            }}>
            {item.desc}
          </Text>
        </View>
        <PropertiMakanan item={item}></PropertiMakanan>
        <Ingredients data={item.ingredients}></Ingredients>
      </View>
    </View>
  );
};

export default Detail;
