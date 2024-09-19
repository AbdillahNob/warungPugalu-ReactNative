import {View, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

const Klik = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            marginHorizontal: 40,
            backgroundColor: '#2C4E80',
            marginTop: 20,
            paddingVertical: 12,
            alignItems: 'center',
            borderRadius: 12,
          }}
          onPress={() => navigation.dispatch(StackActions.replace('Main'))}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 8, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              marginLeft: 40,
            }}>
            <Text style={{justifyContent: 'flex-start'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              marginRight: 40,
            }}>
            <Text>Forgot Acount ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Klik;
