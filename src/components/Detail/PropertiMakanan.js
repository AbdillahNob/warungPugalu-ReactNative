import {View, Text, Image} from 'react-native';
import React from 'react';

const PropertiMakanan = props => {
  return (
    <View>
      <View style={{flex: 1, marginTop: 16, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#FA7070',
            width: 104,
            height: 100,
            marginLeft: 20,
            elevation: 2,
            borderRadius: 4,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
            }}>
            <Image
              source={require('../../image/Detail/time.png')}
              style={{width: 40, height: 40}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {props.item.durasi}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#6AD4DD',
            width: 104,
            height: 100,
            marginLeft: 20,
            elevation: 2,
            borderRadius: 4,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
            }}>
            <Image
              source={require('../../image/Detail/food.png')}
              style={{width: 40, height: 40}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {props.item.tipe}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFBB70',
            width: 104,
            height: 100,
            marginLeft: 20,
            elevation: 2,
            borderRadius: 4,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
            }}>
            <Image
              source={require('../../image/Detail/fire.png')}
              style={{width: 40, height: 40}}></Image>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {props.item.kalori}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PropertiMakanan;
