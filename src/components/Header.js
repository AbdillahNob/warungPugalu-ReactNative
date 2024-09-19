import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={style.containerHeader}>
      <Text style={style.Header}>
        Warung
        <Text style={{color: '#0E46A3'}}>Pugalu</Text>
      </Text>
      <Image
        source={require('../image/salad_8204862.png')}
        style={{width: 45, height: 45, marginLeft: 6, marginTop: 10}}
      />
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 20,
    marginBottom: 8,
  },

  Header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 12,
    color: 'black',
  },
});
