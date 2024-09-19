import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

const Ingredients = ({data}) => {
  return (
    <View>
      <View
        style={{
          marginTop: 120,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../image/Detail/star.png')}
          style={{
            width: 20,
            height: 20,
            marginTop: 2,
            marginRight: 8,
          }}></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            fontStyle: 'italic',
          }}>
          INGREDIENTS
        </Text>
        <Image
          source={require('../../image/Detail/star.png')}
          style={{
            width: 20,
            height: 20,
            marginTop: 2,
            marginLeft: 8,
          }}></Image>
      </View>
      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{paddingHorizontal: 10}}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 2,
              }}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'red',
                  borderRadius: 8,
                  marginTop: 6,
                  marginLeft: 8,
                  marginRight: -6,
                }}></View>
              <Text
                style={{
                  marginHorizontal: 12,
                }}>
                {item.bahan}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Ingredients;
