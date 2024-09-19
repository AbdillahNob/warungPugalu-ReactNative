import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      Alert.alert('INFO', 'Anda belum LOGIN, Silahkan LOGIN terlebih dahulu', [
        {
          onPress: () => login(),
        },
      ]);
    }, 3000);
  });

  const login = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={'#9CAFAA'}
        barStyle={'dark-content'}></StatusBar>
      <View style={style.containerElement}>
        <Image
          source={require('../image/salad_8204862.png')}
          style={{width: 80, height: 80}}></Image>
        <ActivityIndicator
          style={style.loading}
          animating={loading}
          color={'black'}
          size="large"></ActivityIndicator>
      </View>
      <View style={style.footer}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>khas</Text>
        <Text style={style.tulisan}>
          Warung<Text style={{color: '#0E46A3'}}>Pugalu</Text>
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#9CAFAA',
    flex: 1,
  },
  containerElement: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loading: {marginLeft: 20},
  footer: {alignItems: 'center', marginBottom: 28},
  tulisan: {fontSize: 25, fontWeight: 'bold', color: 'black'},
});
